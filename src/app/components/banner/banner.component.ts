import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { titleCase } from 'src/app/shared/util/tools';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department, Category } from 'src/app/models';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner_title: string;
  banner_desc: string;
  banner_categories: Array<Category>;
  feature_image: object;
  banner_image: object;
  departments: any;
  ;
  constructor(private activatedRoute: ActivatedRoute, private departmentService: DepartmentsService) { 
    this.banner_title = 'Regional Wear'
    this.banner_categories = new Array ();

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

  async ngOnInit() {

    await this.departmentService.getDepartments().then(data => {
      this.departments = data
    });

    this.activatedRoute.params.subscribe(async queryParams => {
      let dept: string = queryParams.dept_name;

      if(dept !== undefined) {

        const department: Array<Department> =  this.departments.filter(function(department) {
          return department.name == titleCase(dept);
        });

        this.banner_categories = await this.getCategories(department[0].department_id);
        this.banner_title = titleCase(dept)+' t-shirts';
        this.banner_desc = department[0].description;
        const position =  Math.floor(Math.random() * (this.banner_image[dept].length - 1));
        this.feature_image = this.banner_image[dept][position];
      }
    });
  }

  getCategories(dept_id: number){
    let cats: any = [];
    cats = this.departmentService.getDepartmentCategories(dept_id).then(categories => {
      return categories;
    });
    return cats;
  }

}
