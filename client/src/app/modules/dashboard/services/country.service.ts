import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  // post(_path, _body, headers = null){
  //   return this.http.post(this.auth.backendUrl+_path, _body, {headers})
  // }
  // get(_path){
  //   return this.http.get(this.auth.backendUrl+_path)
  // }

  postCountry(_data): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+this.auth.loadToken())
    return this.http.post(this.auth.backendUrl+'/research/addResearch', _data, {headers});
  }

  getCountries(): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+this.auth.loadToken())
    return this.http.get(this.auth.backendUrl+'/research/getResearches', {headers});
  }

  deleteCountry(_data): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+this.auth.loadToken())
    return this.http.post(this.auth.backendUrl+'/research/deleteResearch', _data, {headers});
  }
}
