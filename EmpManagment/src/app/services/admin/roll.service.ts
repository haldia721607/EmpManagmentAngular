import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditRoleViewModel } from 'src/app/models/edit-role-view-model';
import { EditUsersInRoleViewModel } from 'src/app/models/edit-users-in-role-view-model';
import { RegisterViewModel } from 'src/app/models/register-view-model';
import { RollViewModel } from 'src/app/models/roll-view-model';
import { UserList } from 'src/app/models/user-list';
import { UserListViewModes } from 'src/app/models/user-list-view-modes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RollService {
  baseUrl: string = "http://localhost:53201";
  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<RollViewModel[]> {
    return this.httpClient.get<RollViewModel[]>(environment.baseUrl + "/api/administration/rolls", { responseType: "json" })
      .pipe(map(
        (data: RollViewModel[]) => {
          for (let i = 0; i < data.length; i++) {
            //data[i].TeamSize = data[i].TeamSize * 100;
          }
          return data;
        }
      ));
  }
  newRoll(rollViewModel: RollViewModel): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + "/api/administration/createroll", rollViewModel, { responseType: "json" });
  }

  getRollByRollID(RollID: string): Observable<EditRoleViewModel> {
    return this.httpClient.get<EditRoleViewModel>(this.baseUrl + "/api/administration/editUserById/" + RollID, { responseType: "json" });
  }

  getUsersInRoll(roleId: string): Observable<EditUsersInRoleViewModel[]> {
    return this.httpClient.get<EditUsersInRoleViewModel[]>(this.baseUrl + "/api/administration/editUsersInRoleByrollId/" + roleId, { responseType: "json" });
  }
  postUsersInRoll(editUsersInRoleViewModel: EditUsersInRoleViewModel, roleId: string): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + "/api/administration/editUsersInRoleByrollId/", { editUsersInRoleViewModel, roleId }, { responseType: "json" });
  }

 
}
