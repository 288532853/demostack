import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { APP_ROUTES } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './Core/custom-material-module';
import { HttpClientModule } from '@angular/common/http';
import { DemoPageComponent } from './demo-page/demo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DemoPageComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
