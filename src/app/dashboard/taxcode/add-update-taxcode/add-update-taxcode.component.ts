import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { TaxCodeService } from 'src/app/services/tax-code.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-update-taxcode',
  templateUrl: './add-update-taxcode.component.html',
  styleUrls: ['./add-update-taxcode.component.css']
})
export class AddUpdateTaxcodeComponent implements OnInit {

  taxCodeForm: FormGroup
  model: any = {};
  isLoginError: boolean = false;
  submitted: boolean= false;
  id:any;
  taxCodeList : any;
  taxtypeList : any;

  constructor(private router: Router,private notificationService: NotificationService,private taxCodeService : TaxCodeService,
    private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this.createForm(null);
    this.getTaxType();
   // this.getTaxCode();
  }

  getTaxType(){
   this.taxCodeService.getTaxType().subscribe(
    (response : any)=>{     
   
      //console.log(Object.entries(response).map(([type, value]) => ({type, value})));
      
      this.taxtypeList = Object.entries(response).map(([id, taxType]) => ({id, taxType}));
        },
        (err : HttpErrorResponse)=>{
          console.log("user error in Response");      
         }

   );

  }

  // getTaxCode(){
  //  // this.taxCodeList = this.taxCodeService.getTaxCode();
  //   this.taxCodeService.getTaxCode().subscribe((response : any)=>{     
  //     //this.dataSource  = response;
  //     this.taxCodeList  = response
  //    // this.dataSource = new MatTableDataSource(this.userList);
       
  //   },
  //   (err : HttpErrorResponse)=>{
  //     console.log("user error in Response");      
  //   });

  //   console.log(this.taxCodeList);
  // }


  createForm(data) {
    if(data == null)
    {
    this.taxCodeForm = this.formBuilder.group({
      taxCodeName: ['', Validators.required],
      description: ['', Validators.required],
      taxType: ['', Validators.required],
      rate: ['', Validators.required],
      isActive: [true],
      Id: ['']
    });
  }
  else
  {
    this.taxCodeForm = this.formBuilder.group({
      taxCodeName: [data.taxCodeName, Validators.required],
      description: [data.description, Validators.required],
      taxType: [data.taxType, Validators.required],
      rate: [data.rate, Validators.required],
      isActive: [data.isActive, Validators.required],
      Id:[data.Id]

    });
  }
}//end createform

get f() { return this.taxCodeForm.controls; }

onSubmit() {
 // this.submitted = true;
  //debugger;

  if (this.taxCodeForm.invalid) {
    return;
  }
  
// if(this.activatedRoute.snapshot.paramMap.get('id') != null)
  // {
  //   this.bindControls(this.activatedRoute.snapshot.paramMap.get('id'))
  // }
  //var isActive = this.taxCodeForm.get('isActive').value;
  

  this.taxCodeService.addUpdateTaxCode(this.taxCodeForm.value).subscribe((response : any)=>{
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
     this.taxCodeForm.reset();
   }
  }
},
  (err : HttpErrorResponse)=>{
    console.log("usererror in Response");
  });

}//end onSubmit

onBack()
{
  this._router.navigate(['/dashboard/ManageTaxcode/']);
}

}//end class
