import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoPageComponent } from './demo-page/demo-page.component';


export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'demo-page', component: DemoPageComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
