import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.route';

@NgModule({
    imports: [ DashboardRouting],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
