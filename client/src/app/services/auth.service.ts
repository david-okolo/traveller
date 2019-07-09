import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl:string = "/users"

  constructor(private http: HttpClient) { }

  signin(_data):Observable<any>{
    return this.http.post(this.backendUrl+"/authenticate", _data)

    //to handle the error
    // .pipe(
    //   catchError()
    // )
  }

}
