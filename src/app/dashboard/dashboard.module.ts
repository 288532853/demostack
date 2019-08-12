import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from '../dashboard/app-routing.module';
import { AuthGuard } from '../guards/auth-guard.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../Core/custom-material-module';
import { HttpClientModule } from '@angular/common/http';
import { AddUpdateUserComponent } from './user/add-update-user/add-update-user.component';
import { UserService } from '../services/user.service';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddUpdateTaxcodeComponent } from './taxcode/add-update-taxcode/add-update-taxcode.component';
import { ManageTaxcodeComponent } from './taxcode/manage-taxcode/manage-taxcode.component';
@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent, AddUpdateUserComponent, ManageUserComponent,AddUpdateTaxcodeComponent, ManageTaxcodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [AuthGuard,UserService],
 
})
export class DashboardModule { }
