import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError, BehaviorSubject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _router: Router,private http : HttpClient) { }

login(userName, password) {
  return this.http.get(environment.apiURL+'/User/Login',{params: {email: userName,password: password}});
}

addUser(data) {
  return this.http.post(environment.apiURL+'/User/AddUpdateUser',data);
}

getUserList() {
   return this.http.get(environment.apiURL+'/User/GetUserList');
}
getUser(userId) {
  return this.http.get(environment.apiURL+'/User/GetUserById',{params:{userId:userId}});
}

deleteUser(id) {
  console.log('deleted Id',id);
  return this.http.delete(environment.apiURL+'/User/DeleteUser/',{params:{id:id}});
  // return this.http.delete(environment.apiURL+'/User/DeleteUser?id='+ id);
}


}//end class