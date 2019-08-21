import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner_title: string;
  banner_categories: Array<String>;
  urlToImage: object;
  
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
    );
    this.urlToImage = {
      female: "https://www.pngarts.com/files/1/Fashion-Transparent-Images.png",
      male: "https://www.pngarts.com/files/5/Black-Blazer-PNG-High-Quality-Image.png",
    };
  }
  ngOnInit() {
  }

}
