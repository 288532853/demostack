import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent implements OnInit {
  userForm: FormGroup
  model: any = {};
  isLoginError: boolean = false;
  submitted: boolean= false;
  id:any;


  constructor(private userService: UserService, private router: Router,private notificationService: NotificationService,
    private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private _router:Router) {
     
     }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log('id',this.id);
    if(this.activatedRoute.snapshot.paramMap.get('id') != null)
    {
      this.bindControls(this.activatedRoute.snapshot.paramMap.get('id'))
    }
    this.createForm(null);
  }

 bindControls(userId)
 {  
  this.userService.getUser(userId).subscribe((response : any)=>{
     
    if(response != null)
    {
      this.createForm(response);
    }
  
    //console.log(response);
    
  },
  (err : HttpErrorResponse)=>{
    console.log("usererror in Response");
  });
 }

  createForm(data) {
    if(data == null)
    {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      Id: ['']

    });
  }
  else
  {
    this.userForm = this.formBuilder.group({
      firstName: [data.FirstName, Validators.required],
      lastName: [data.LastName, Validators.required],
      email: [data.Email, [Validators.required, Validators.email]],
      phone: [data.Phone, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      password: [data.Password, [Validators.required, Validators.minLength(6)]],
      address: [data.Address, Validators.required],
      city: [data.City, Validators.required],
      state: [data.State, Validators.required],
      Id:[data.Id]

    });
  }
  }

  get f() { return this.userForm.controls; }

  // public hasError = (controlName: string, errorName: string) =>{
  //   return this.userForm.controls[controlName].hasError(errorName);
  // }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    if(this.activatedRoute.snapshot.paramMap.get('id') != null)
    {
      this.bindControls(this.activatedRoute.snapshot.paramMap.get('id'))
    }
    this.userService.addUser(this.userForm.value).subscribe((response : any)=>{
     // console.log()
     if(response.status == '200')
     {
      //alert(response.message);
      if(this.activatedRoute.snapshot.paramMap.get('id') != null)
    {
      this.notificationService.success(response.message);
      this._router.navigate(['/dashboard/ManageUser/']);
    }
    else{
      this.notificationService.success(response.message);
      this.submitted = false;
      this.userForm.reset();
    }
  }
     // alert(response);
      
      

    },
    (err : HttpErrorResponse)=>{
      console.log("usererror in Response");
    });
  }


  public onSaveAndClose() {

    //this.logger.info('ContactPage: onSaveAndClose()');

    //this.router.navigate(['sales/contacts']);
  }

onBack()
{
  this._router.navigate(['/dashboard/ManageUser/']);
}
}//end class
