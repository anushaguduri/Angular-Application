import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const Auth_api =environment.baseUrl;
const httpOptions={
headers:new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  login(username:string,password:string):Observable<any>{
    return this.http.post(Auth_api+'/auth/login/',{username,password},httpOptions);
  }
}
