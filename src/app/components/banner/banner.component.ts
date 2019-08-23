import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { titleCase } from 'src/app/shared/util/tools';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner_title: string;
  banner_categories: Array<String>;
  feature_image: object;
  banner_image: object;
  
  constructor(private activatedRoute: ActivatedRoute) { 
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

    this.banner_image = {
      women: [
        "https://www.pngarts.com/files/3/Womens-T-Shirt-Free-PNG-Image.png",
        "https://www.pngarts.com/files/3/Womens-T-Shirt-PNG-Picture.png",
        "https://www.pngarts.com/files/3/Women-T-Shirt-Download-Transparent-PNG-Image.png",
        "https://www.pngarts.com/files/3/Womens-T-Shirt-PNG-High-Quality-Image.png"
      ],
      men: [
        "https://www.pngarts.com/files/4/Dress-Shirt-PNG-Download-Image.png",
        "https://www.pngarts.com/files/4/Polo-Shirt-PNG-Image.png",
        "https://www.pngarts.com/files/4/Polo-Shirt-PNG-Transparent-Image.png",
        "https://www.pngarts.com/files/3/Black-T-Shirt-PNG-Background-Image.png"
      ],
    };

    this.feature_image = this.banner_image['men'][0];

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(queryParams => {
      let cat = queryParams.cat_name;
      if(cat !== undefined) {
        this.banner_title = titleCase(cat)+"s Wear";
        const position =  Math.floor(Math.random() * (this.banner_image[cat].length - 1));
        this.feature_image = this.banner_image[cat][position];
      }
    });
  }

}
