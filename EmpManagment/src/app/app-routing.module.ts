import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent},
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./employee/employee.module").then(m => m.EmployeeModule) }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
