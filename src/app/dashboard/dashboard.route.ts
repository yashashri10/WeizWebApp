import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {  DashboardComponent } from './dashboard.component';

export const dashboardRouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forRoot(dashboardRouting);

