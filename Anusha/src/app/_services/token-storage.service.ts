import { Injectable } from '@angular/core';


const Token_key = "auth-token";
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(Token_key);
    window.sessionStorage.setItem(Token_key, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(Token_key);
  }
}
