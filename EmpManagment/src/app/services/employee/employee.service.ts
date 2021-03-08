import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from 'src/app/models/cities';
import { Countries } from 'src/app/models/countries';
import { EmployeeList } from 'src/app/models/employee-list.model';
import { EmployeeViewModel } from 'src/app/models/EmployeeViewModel';
import { Gender } from 'src/app/models/gender';
import { States } from 'src/app/models/states';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getCountry(): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(environment.baseUrl + "/api/employee/country", { responseType: "json" });
  }

  getStateById(countryId: number): Observable<States[]> {
    return this.httpClient.get<States[]>(environment.baseUrl + "/api/employee/state/" + countryId, { responseType: "json" });
  }
  getCityById(stateId: number): Observable<Cities[]> {
    return this.httpClient.get<Cities[]>(environment.baseUrl + "/api/employee/city/" + stateId, { responseType: "json" });
  }
  getGender(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(environment.baseUrl + "/api/employee/gender", { responseType: "json" });
  }
  postEmployee(employee: EmployeeViewModel): Observable<boolean> {
    return this.httpClient.post<boolean>(environment.baseUrl + "/api/employee/addemployee", employee, { responseType: "json" });
  }
  
  getAllEmployee():Observable<EmployeeList[]>{
    return this.httpClient.get<EmployeeList[]>(environment.baseUrl+"/api/employee/employeeList",{responseType:"json"});
  }
}
