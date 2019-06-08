import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent  {

  // registerForm: FormGroup;
  // submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
