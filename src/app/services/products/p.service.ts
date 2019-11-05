import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(limit): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.api_url}/products?limit=${limit}`);
  }

  getProductById(productID: number): Observable<Product> {
    return this.http.get<Product>(`${environment.api_url}/products/${productID}`);
  }

}
