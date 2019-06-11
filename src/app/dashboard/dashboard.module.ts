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
import { MangeUserComponent } from './user/mange-user/mange-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent, AddUpdateUserComponent, MangeUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,UserService],
 
})
export class DashboardModule { }
