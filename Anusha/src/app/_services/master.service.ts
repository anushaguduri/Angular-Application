import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseUrl = environment.baseUrl;

  constructor(public http: HttpClient, private tokenStorage: TokenStorageService) { }

  requestPost(data: any, endp: string) {
    const currentUser = this.tokenStorage.getToken();
    const httpOptions = {
      responseType: "blob" as "json",
      headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser}`,
      }),
    };
    return this.http.post<any>(this.baseUrl + endp, data, httpOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  requestPatch(data: any, endp: string) {
    const currentUser = this.tokenStorage.getToken();
    const httpOptions = {
      responseType: "blob" as "json",
      headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser}`,
      }),
    };
    return this.http.patch<any>(this.baseUrl + endp, data, httpOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  requestGetParams(data: any, endp: string) {
    const currentUser = this.tokenStorage.getToken();
    const httpOptions = {
      responseType: "blob" as "json",
      headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser}`,
      }),
    };
    return this.http.get<any>(this.baseUrl + endp, {
      params: data, headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser}`,
      })
    }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  requestGet(endp: string) {
    const currentUser = this.tokenStorage.getToken();
    const httpOptions = {
      responseType: "blob" as "json",
      headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser}`,
      }),
    };
    return this.http.get<any>(this.baseUrl + endp, httpOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  requestDelete(endp: string, data: any) {
    const currentUser = this.tokenStorage.getToken();
    const httpOptions = {
      responseType: "blob" as "json",
      headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser}`,
      }),
    };
    return this.http.delete<any>(this.baseUrl + endp + '/' + data)
  }
}
