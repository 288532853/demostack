import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';

import { MangeUserComponent } from './user/mange-user/mange-user.component';
import { AddUpdateUserComponent } from './user/add-update-user/add-update-user.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'admin', component: AdminComponent},
      {path: 'adduser', component: AddUpdateUserComponent},
      {path: 'adduser/:id', component: AddUpdateUserComponent},
      {path: 'ManageUser', component: MangeUserComponent}
    ]
  }
];

