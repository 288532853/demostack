import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TaxCodeService } from 'src/app/services/tax-code.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage-taxcode',
  templateUrl: './manage-taxcode.component.html',
  styleUrls: ['./manage-taxcode.component.css']
})
export class ManageTaxcodeComponent implements OnInit {

  showhide:any =false;
taxCodeList :any;
  //private spinner: NgxSpinnerService,
  constructor(private taxCodeService: TaxCodeService,private _router:Router, private dialogService: DialogService,
    private notificationService: NotificationService) {}

  displayedColumns: string[] = ['Id','TaxCodeName','Description','TaxType','Rate','IsActive','actionsColumn'];
  dataSource : any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  bindTaxCode()
  {    
   // this.spinner.show();
     this.taxCodeService.getTaxCode().subscribe((response : any)=>{     
      this.dataSource  = response;
      this.taxCodeList  = response
      this.dataSource = new MatTableDataSource(this.taxCodeList);
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

  ngOnInit() {
    this.bindTaxCode();
  }

  onNew()
  {
    this._router.navigate(['/dashboard/addUpdateTaxCode/']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}//end class
