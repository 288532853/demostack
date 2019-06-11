import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mange-user',
  templateUrl: './mange-user.component.html',
  styleUrls: ['./mange-user.component.css']
})
export class MangeUserComponent implements OnInit {
  
userList :any;
  
  constructor(private userService: UserService,private _router:Router) {}

  displayedColumns: string[] = ['Id', 'FullName', 'Phone', 'Email','actionsColumn'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


  ngOnInit() {    
    this.bindUser();
   
  }


  bindUser()
  {    
     this.userService.getUserList().subscribe((response : any)=>{
     
      this.dataSource  = response;
      this.userList  = response
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.userList);
      
    },
    (err : HttpErrorResponse)=>{
      console.log("usererror in Response");
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(i,id){
    this._router.navigate(['/dashboard/adduser/'+ id]);
    //this._router.navigate(['/dashboard/adduser/'], { queryParams:  id, skipLocationChange: true});
  }

  deleteItem(i,id){

  }

 

}//end class
