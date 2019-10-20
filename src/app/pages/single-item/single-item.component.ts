import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import * as productActions from 'src/app/pages/single-item/state/product.actions';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  rating: number = 2;
  quantity: number = 1;
  product_id: string;
  productDetails: any = {};
  isBrowser: any;

  constructor(
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    @Inject(PLATFORM_ID) private platformId,
    private store: Store<any>
    ) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }

  ngOnInit() {
    this.product_id = this.route.snapshot.paramMap.get('product_id');
    this.product_id = atob(this.product_id);
    this.ngxService.startLoader('loader-product');

    const productId = parseInt(this.product_id, 10);

    this.store.dispatch(new productActions.LoadProduct(productId));
    this.store.subscribe((state) => {
      this.productDetails = state.product.product;
      this.productDetails.rating = Math.floor(Math.random() * 5) + 1;
      console.log(this.productDetails);
    });

    setTimeout(() => {
      this.ngxService.stopLoader('loader-product');
    }, 2000);
  }

  decrementQty = () => {
    this.quantity = this.quantity < 2 ? 1: this.quantity -= 1;
  }

  incrementQty = () => {
    this.quantity +=1
  }

  addToCart = () => {
    console.log('added to cart');
  }

  switchImages = (element) => {
    const clr = document.getElementById(`main-img`);
    clr.setAttribute('src', element.target.src );
  }

}
