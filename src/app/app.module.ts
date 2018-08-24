import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material';

import { AppComponent } from './app.component';
import { RoutesModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MatFormField,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutesModule
  ],
  exports:[LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
