import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from 'src/app/guards/can-activate-guard.service';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { AddemployeeComponent } from '../components/addemployee/addemployee.component';
import { AddrollComponent } from '../components/addroll/addroll.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { EditUsersInRoleComponent } from '../components/edit-users-in-role/edit-users-in-role.component';
import { EditemployeeComponent } from '../components/editemployee/editemployee.component';
import { EditrollComponent } from '../components/editroll/editroll.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { EmployeedetailComponent } from '../components/employeedetail/employeedetail.component';
import { ListemployeeComponent } from '../components/listemployee/listemployee.component';
import { ManageUserClaimsComponent } from '../components/manage-user-claims/manage-user-claims.component';
import { ManageUserRolesComponent } from '../components/manage-user-roles/manage-user-roles.component';
import { RollComponent } from '../components/roll/roll.component';
import { UserComponent } from '../components/user/user.component';
const routes: Routes = [
  {
    path: "", canActivate: [CanActivateGuardService], data: { expectedRole: "Admin" }, children: [
      { path: "dashboard", component: DashboardComponent, data: { linkIndex: 0 } },
      { path: "addemployee", component: AddemployeeComponent, data: { linkIndex: 1 } },
      { path: "editemployee/:id", component: EditemployeeComponent, data: { linkIndex: 2 } },
      { path: "employeedetail/:id", component: EmployeedetailComponent, data: { linkIndex: 3 } },
      { path: "listemployee", component: ListemployeeComponent, data: { linkIndex: 4 } },
      { path: "roll", component: RollComponent, data: { linkIndex: 5 } },
      { path: "roll/addroll", component: AddrollComponent, data: { linkIndex: 9 } },
      { path: "user", component: UserComponent, data: { linkIndex: 6 } },
      { path: "roll/editroll/editusersinrole/:roleid", component: EditUsersInRoleComponent, data: { linkIndex: 7 } },
      { path: "roll/editroll/:roleid", component: EditrollComponent, data: { linkIndex: 8 } },
      { path: "user/editUser/:userId", component: EditUserComponent, data: { linkIndex: 10 } },
      { path: "user/addUser", component: AddUserComponent, data: { linkIndex: 11 } },
      { path: "user/editUser/manageUserRoles/:userId", component: ManageUserRolesComponent, data: { linkIndex: 12 } },
      { path: "user/editUser/manageUserClaims/:userId", component: ManageUserClaimsComponent, data: { linkIndex: 13 } },
      { path: "employee", component: EmployeeComponent, data: { linkIndex: 14 } }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
