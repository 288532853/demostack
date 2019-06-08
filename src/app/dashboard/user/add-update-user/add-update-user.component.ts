import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
