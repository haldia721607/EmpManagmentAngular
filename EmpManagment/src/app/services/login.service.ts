import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../models/login';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = "http://localhost:53201";
  private httpClient: HttpClient
  userId: string = null;
  currentUserName: string = null;
  currentUserRole: string = null;

  constructor(private httpBackend: HttpBackend, private router: Router, private jwtHelperService: JwtHelperService) { }
  public Login(loginViewModel: LoginViewModel): Observable<any> {
    // var currentUser = { Token: "" };
    // var headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer ");
    // if (sessionStorage.currentUser != null) {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.Token);
    // }


    this.httpClient = new HttpClient(this.httpBackend);
    //return this.httpClient.post<any>(this.baseUrl + "/authenticate", loginViewModel, { headers: headers, responseType: "json" })
    return this.httpClient.post<any>(this.baseUrl + "/api/Account/authenticate", loginViewModel, { responseType: "json" })
      .pipe(map(user => {
        if (user) {
          this.userId = user.id;
          this.currentUserName = user.userName;
          this.currentUserRole = user.role;
          sessionStorage.currentUser = JSON.stringify(user);
        }
        return user;
      }));
  }
  public detectIfAlreadyLoggedIn() {
    if (this.jwtHelperService.isTokenExpired() == false) {
      var currentUser = JSON.parse(sessionStorage.currentUser);
      // console.log(currentUser);
      this.userId = currentUser.id;
      this.currentUserName = currentUser.userName;
      this.currentUserRole = currentUser.role;
    }
  }

  // public Register(signUpViewModel: SignUpViewModel): Observable<any> {
  //   this.httpClient = new HttpClient(this.httpBackend);
  //   return this.httpClient.post<any>("/register", signUpViewModel, { responseType: "json" })
  //     .pipe(map(user => {
  //       if (user) {
  //         this.currentUserName = user.UserName;
  //         this.currentUserRole=user.Role;
  //         sessionStorage.currentUser = JSON.stringify(user);
  //       }
  //       return user;
  //     }));
  // }




  public Logout() {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUserRole");
    this.currentUserName = null;
    this.currentUserRole = null;
    this.router.navigateByUrl("/login");
  }

  public isAuthenticated(): boolean {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
    if (this.jwtHelperService.isTokenExpired(token = token)) {
      return false;//token is not valid
    }
    else {
      return true;//token is valid
    }
  }

  // public getAllEmployes(): Observable<any>
  // {
  //   this.httpClient = new HttpClient(this.httpBackend);
  //   return this.httpClient.get<any>("/api/getallemployees", { responseType: "json" });
  // }
}
