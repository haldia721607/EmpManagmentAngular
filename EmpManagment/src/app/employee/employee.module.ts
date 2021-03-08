import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { ListemployeeComponent } from './components/listemployee/listemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';



@NgModule({
  declarations: [DashboardComponent, AddemployeeComponent, ListemployeeComponent, EditemployeeComponent],
  imports: [
    SharedModule,
    EmployeeRoutingModule,
  ]
})
export class EmployeeModule { }
