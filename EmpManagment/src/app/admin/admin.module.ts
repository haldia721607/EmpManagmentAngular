import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListemployeeComponent } from './components/listemployee/listemployee.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeedetailComponent } from './components/employeedetail/employeedetail.component';
import { DeleteemployeeComponent } from './components/deleteemployee/deleteemployee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from '../admin/admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RollComponent } from './components/roll/roll.component';
import { UserComponent } from './components/user/user.component';
import { AddrollComponent } from './components/addroll/addroll.component';
import { EditrollComponent } from './components/editroll/editroll.component';
import { EditUsersInRoleComponent } from './components/edit-users-in-role/edit-users-in-role.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ManageUserRolesComponent } from './components/manage-user-roles/manage-user-roles.component';
import { ManageUserClaimsComponent } from './components/manage-user-claims/manage-user-claims.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    ListemployeeComponent, 
    AddemployeeComponent, 
    EditemployeeComponent, 
    EmployeedetailComponent, 
    DeleteemployeeComponent, 
    DashboardComponent,
    RollComponent,
    UserComponent,
    AddrollComponent,
    EditrollComponent,
    EditUsersInRoleComponent,
    EditUserComponent,
    AddUserComponent,
    ManageUserRolesComponent,
    ManageUserClaimsComponent,
    EmployeeComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
