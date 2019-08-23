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
    this.banner_title = 'Mens Wear'
    this.banner_categories = new Array (
      'French',
      'Italian',
      'Irish',
    );

    this.banner_image = {
      regional: [
        'https://www.pngarts.com/files/3/Womens-T-Shirt-Free-PNG-Image.png',
        'https://www.pngarts.com/files/3/Womens-T-Shirt-PNG-Picture.png',
        'https://www.pngarts.com/files/3/Women-T-Shirt-Download-Transparent-PNG-Image.png',
        'https://www.pngarts.com/files/3/Womens-T-Shirt-PNG-High-Quality-Image.png'
      ],
      seasonal: [
        'https://www.pngarts.com/files/4/Dress-Shirt-PNG-Download-Image.png',
        'https://www.pngarts.com/files/4/Polo-Shirt-PNG-Image.png',
        'https://www.pngarts.com/files/4/Polo-Shirt-PNG-Transparent-Image.png',
        'https://www.pngarts.com/files/3/Black-T-Shirt-PNG-Background-Image.png'
      ],
      nature: [
        'https://www.pngarts.com/files/4/Dress-Shirt-PNG-Download-Image.png',
        'https://www.pngarts.com/files/4/Polo-Shirt-PNG-Image.png',
        'https://www.pngarts.com/files/4/Polo-Shirt-PNG-Transparent-Image.png',
        'https://www.pngarts.com/files/3/Black-T-Shirt-PNG-Background-Image.png'
      ],
    };

    this.feature_image = this.banner_image['nature'][0];

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(queryParams => {
      let dept = queryParams.dept_name;
      if(dept !== undefined) {
        this.banner_title = titleCase(dept)+' t-shirts';
        const position =  Math.floor(Math.random() * (this.banner_image[dept].length - 1));
        this.feature_image = this.banner_image[dept][position];
      }
    });
  }

}
