import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  async getProducts(limit): Promise<Product> {
    return await this.http.get<any>(`${environment.api_url}/products?limit=${limit}`)
    .toPromise();
  }

  async getAProduct(product_id): Promise<Product> {
    return await this.http.get<any>(`${environment.api_url}/products/${product_id}`)
    .toPromise();    
  }

}
