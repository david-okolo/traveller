import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl:string = "http://localhost:8080"

  constructor(
      private http: HttpClient 
    ) { }

  loadToken(){
    return localStorage.getItem('token');
  }

  isTokenValid(){
    let helper = new JwtHelperService();
    console.log(helper.isTokenExpired(this.loadToken()))
    return !helper.isTokenExpired(this.loadToken())
  }

  signin(_data):Observable<any>{
    return this.http.post(this.backendUrl+"/users/authenticate", _data)

    //to handle the error
    // .pipe(
    //   catchError()
    // )
  }

}
