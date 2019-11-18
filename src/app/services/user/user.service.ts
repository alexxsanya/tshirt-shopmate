import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageService } from 'src/app/shared/util/localStorageService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  loginUser(userFormData): Observable<any> {
    return this.http.post(`${environment.api_url}/customers/login`, userFormData);
  }

  createUser(userFormData): Observable<any> {
    console.log(userFormData);
    return this.http.post(`${environment.api_url}/customers`, userFormData);
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

    console.log('auth - ' + token);
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

  getToken = () => {
    return this.localStorage.get('accessToken', undefined);
  }
}
