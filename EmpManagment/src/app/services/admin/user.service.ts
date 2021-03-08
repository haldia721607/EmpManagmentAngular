import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/admin/components/edit-user/edit-user.component';
import { Cities } from 'src/app/models/cities';
import { Countries } from 'src/app/models/countries';
import { EditUser } from 'src/app/models/edit-user';
import { States } from 'src/app/models/states';
import { UserListViewModes } from 'src/app/models/user-list-view-modes';
import { UserRolesViewModel } from 'src/app/models/user-roles-view-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:53201";
  constructor(private httpClient: HttpClient) { }

  getUsers(userId: string): Observable<UserListViewModes[]> {
    return this.httpClient.get<UserListViewModes[]>(this.baseUrl + "/api/administration/users/" + userId, { responseType: "json" });
  }
  getCountries(): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(this.baseUrl + "/api/administration/countries", { responseType: "json" });
  }
  getStates(countryId: string): Observable<States[]> {
    return this.httpClient.get<States[]>(this.baseUrl + "/api/administration/states/" + countryId, { responseType: "json" });
  }
  getCities(stateId: string): Observable<Cities[]> {
    return this.httpClient.get<Cities[]>(this.baseUrl + "/api/administration/cities/" + stateId, { responseType: "json" });
  }
  getUserByEmail(Email: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/api/administration/getUserByEmail/" + Email, { responseType: "json" })
  }
  getUserByuserId(userId: string): Observable<EditUser> {
    return this.httpClient.get<EditUser>(this.baseUrl + "/api/administration/editUser/" + userId, { responseType: "json" });
  }
  getmanageUserRolesByUserId(userId: string): Observable<UserRolesViewModel[]> {
    return this.httpClient.get<UserRolesViewModel[]>(this.baseUrl + "/api/administration/manageUserRoles/" + userId, { responseType: "json" });
  }
  postmanageUserRolesByUserId(userRoles: UserRolesViewModel[], userId: string): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + "/api/administration/manageUserRoles/", { userRoles, userId }, { responseType: "json" });

  }
}
