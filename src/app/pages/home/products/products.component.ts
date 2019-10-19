import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/product';

import { Store } from '@ngrx/store';
import * as productsActions from 'src/app/pages/home/products/state/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productStore:any = {};
  constructor(
    private ngxService: NgxUiLoaderService,
    private productsService: ProductsService,
    private store: Store<any>) { }

  // async ngOnInit() {
  //   // this.productStore = await this.getProducts();

  //   // console.log(this.productStore)

  //   // this.ngxService.startBackground('loader-products');
  //   // // Do something here...
  //   // this.productStore = await this.getProducts();
  //   // this.ngxService.stopBackground('loader-products');

  //   this.ngxService.startLoader('loader-products'); 
  //   this.productStore = await this.getProducts();
  //   setTimeout(() => {
  //     this.ngxService.stopLoader('loader-products'); 
  //   }, 2000);
  // }

  ngOnInit() {
    this.store.dispatch(new productsActions.LoadProducts());
    // this.store.subscribe(state => (this.productStore = state.products.rows));
    this.store.subscribe((state) => {
      this.productStore = state.products.products;
      console.log(this.productStore);
    });
  }

  getProducts() {
    let products: any = [];

    products = this.productsService.getProducts(6).then(productsData => {
      return productsData;
    });

    return products;
  }
}
