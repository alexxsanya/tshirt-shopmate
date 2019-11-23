import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageService } from 'src/app/shared/util/localStorageService';
import { WindowService } from 'src/app/shared/util/windowService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private window: WindowService) {}

  loginUser(userFormData): Observable<any> {
    return this.http.post(`${environment.api_url}/customers/login`, userFormData);
  }

  createUser(userFormData): Observable<any> {
    console.log(userFormData);
    return this.http.post(`${environment.api_url}/customers`, userFormData);
  }

  logOut = () => {
    this.localStorage.clear();
    this.window.goto('/');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired = (token?: string): boolean => {
    if (token === undefined) { token = this.getToken(); }
    if (token === undefined) { return true; }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

  getToken = () => {
    return this.localStorage.get('accessToken', undefined);
  }
}
