import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner_title: string;
  banner_categories: Array<String>;

  constructor() { 
    this.banner_title = "Mens Wear"
    this.banner_categories = new Array (
      'Accessories',
      'Asos Basic Tops',
      'Bags',
      'Caps & Hats',
      'Gifts',
      'Grooming',
      'Hoodies & Sweatshirts',
      'Jackets & Coats',
      'Jeans',
      'Jewelly',
      'Joggers',
      'Jumpers & Cardigans'
    )
  }

  ngOnInit() {
  }

}
