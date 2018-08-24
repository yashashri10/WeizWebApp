
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'tour', component: TourFormComponent},
    { path: 'dashboard', component: DashboardComponent}

];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);
