import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from 'src/app/admin/components/addemployee/addemployee.component';
import { DashboardComponent } from 'src/app/admin/components/dashboard/dashboard.component';
import { EditemployeeComponent } from 'src/app/admin/components/editemployee/editemployee.component';
import { ListemployeeComponent } from 'src/app/admin/components/listemployee/listemployee.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, data: { linkIndex: 0 } },
  { path: "addemployee", component: AddemployeeComponent, data: { linkIndex: 1 } },
  { path: "editemployee", component: EditemployeeComponent, data: { linkIndex: 2 } },
  { path: "listmployee", component: ListemployeeComponent, data: { linkIndex: 3 } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
