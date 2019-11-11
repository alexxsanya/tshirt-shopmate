import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department, Category } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  async getDepartments(): Promise<Department> {
    return await this.http.get<Department>(`${environment.api_url}/departments`)
    .toPromise();
  }

  async getDepartmentCategories(dept_id: number): Promise<Category>{
    return await this.http.get<Category>(`${environment.api_url}/categories/inDepartment/${dept_id}`)
    .toPromise();
  }

}
