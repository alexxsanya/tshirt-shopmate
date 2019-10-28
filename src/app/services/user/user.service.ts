import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  loginUser(userFormData): Observable<any> {
    return this.http.post(`${environment.api_url}/customers/login`, userFormData);
  }

}
