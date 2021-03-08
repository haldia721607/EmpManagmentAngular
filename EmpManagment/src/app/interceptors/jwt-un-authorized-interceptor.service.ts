import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorizedInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap(

      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //do something with response
        }
      },
      (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            console.log("401 Un-Authorized Access" + error);
            this.router.navigateByUrl("/login");
          }
        }
      }
    ));
  }
}
