import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.modules';

import { AppComponent } from './app.component';
import { RoutesModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TourFormComponent } from './tour-form/tour-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TourFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutesModule,
    MaterialModule,
    DashboardModule
  ],
  exports: [ LoginComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
