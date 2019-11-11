import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Product } from 'src/app/models/product';

import { Store } from '@ngrx/store';
import * as productsActions from 'src/app/pages/home/products/state/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productStore: Array<any> = [];
  p = 0;

  constructor(
    private ngxService: NgxUiLoaderService,
    private store: Store<any>) { }

  async ngOnInit() {
    this.ngxService.startLoader('loader-products');

    await this.store.dispatch(new productsActions.LoadProducts());
    this.store.subscribe((state) => {
      this.productStore = state.products.products;
    });
    setTimeout(() => {
        this.ngxService.stopLoader('loader-products');
      }, 2000);

  }

}
