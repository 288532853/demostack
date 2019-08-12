import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-mange-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  
showhide:any =false;
userList :any;
  //private spinner: NgxSpinnerService,
  constructor(private userService: UserService,private _router:Router, private dialogService: DialogService,
    private notificationService: NotificationService) {}

  displayedColumns: string[] = ['Id', 'FullName', 'Phone', 'Email','actionsColumn'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


  ngOnInit() {    
     
    this.showhide =true;
    this.bindUser();
   
  }


  bindUser()
  {    
   // this.spinner.show();
     this.userService.getUserList().subscribe((response : any)=>{     
      this.dataSource  = response;
      this.userList  = response
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     // console.log(this.paginator);
     this.showhide =false;
    },
    (err : HttpErrorResponse)=>{
      console.log("user error in Response");
      this.showhide =false;
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

  deleteUser(id){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.userService.deleteUser(id).subscribe((response : any)=>{
          debugger;
         if(response.status = '200')
         {
          this.notificationService.error(response.message);
          this.bindUser();
         }
         else
         {
          this.notificationService.error(response.message);
         }
        },
        (err : HttpErrorResponse)=>{
          console.log("user error in Response");
        });
      }
    });
  }

  onNew()
  {
    this._router.navigate(['/dashboard/adduser/']);
  }
 

}//end class
