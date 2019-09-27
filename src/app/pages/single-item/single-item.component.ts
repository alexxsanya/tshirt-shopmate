import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { isPlatformBrowser } from '@angular/common';

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
    private productsService: ProductsService,
    private ngxService: NgxUiLoaderService,
    @Inject(PLATFORM_ID) private platformId,
    ) { 
      this.isBrowser = isPlatformBrowser(this.platformId);
    }

  async ngOnInit() {
    this.product_id = this.route.snapshot.paramMap.get('product_id');
    this.product_id = atob(this.product_id)
    this.ngxService.startLoader('loader-product'); 

    this.productDetails = await this.getAProduct(this.product_id);
    this.productDetails.rating = Math.floor(Math.random() * 5) + 1;

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
    console.log("added to cart");
  }

  getAProduct(product_id){
    let products: any = []

    products = this.productsService.getAProduct(product_id).then(productsData => {
      return productsData;
    });

    return products;
  }

  switchImages = (element) => {
    const clr = document.getElementById(`main-img`);
    clr.setAttribute('src', element.target.src );
  }

}
