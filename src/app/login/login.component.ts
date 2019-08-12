import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  :host {
    display: flex;
    justify-content: center;
    margin: 100px 0px;
  }
 
  .my-card{width:30%;}
  .my-card-action{text-align: center;}
  .mat-form-field {
    width: 100%;
    min-width: 300px;
  }

  mat-card-title,
  mat-card-content {
    display: flex;
    justify-content: center;
  }

  .error {
    padding: 16px;
    width: 300px;
    color: white;
    background-color: red;
  }

  .button {
    display: flex;
    justify-content: flex-end;
  }
`,]
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  //   submitted = true;
  model: any = {};
  isLoginError : boolean = false;
  errorMessage : string = '';
  

  constructor(private userService: UserService,private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  

  }

  onSubmit() {
    
    var email = this.model.email;
    var password = this.model.password;
   // this._authService.login(this.model.email,this.model.password);

    this.userService.login(this.model.email, this.model.password).subscribe((response : any)=>{
      debugger;
      if(response =='420')
      {
       // alert("Invalid Credential");
        this.errorMessage = "Invalid Credential";
      }
      else  if(response != '')
      {
      //localStorage.setItem('userToken',this.model.email);
      localStorage.setItem('token', response.Tokan);
      this.router.navigateByUrl('/dashboard');  
      }
      
      else if(response == '')
      {
        alert("API Server Not Found");
      }
      else
      {
       // alert(data);
      }
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }


  // login() {
   //  this._authService.login();
  // }

  // loginAdmin() {
  //   this._authService.loginAdmin();
  // }
 
 

//   login() : void {
//   debugger;

//   if (this.loginForm.invalid) {
//     alert("Invalid credentials");
//     return;
// }
//     if(this.username === undefined && this.password === undefined){
//      //this.router.navigate(["/dashboard"]);
//      //this._authService.login();
//     }else {
//       alert("Invalid credentials");
//     }
//   }

   // convenience getter for easy access to form fields
   //get f() { return this.loginForm.controls; }

   

}
