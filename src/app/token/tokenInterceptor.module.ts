import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    debugger;
    var userStorage = localStorage.getItem("user");
    if(userStorage != null){
      var user = JSON.parse(userStorage);
      if(user != null){
        httpRequest = httpRequest.clone({ headers: httpRequest.headers.set('Authorization', 'Bearer ' + user.token) });

        httpRequest = httpRequest.clone({ headers: httpRequest.headers.set('Content-Type', 'application/json') });
      }
    }


    return next.handle(httpRequest);
  }
}
