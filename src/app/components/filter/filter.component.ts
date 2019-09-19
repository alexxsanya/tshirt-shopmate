import { Component, OnInit, Inject, PLATFORM_ID, asNativeElements } from '@angular/core';
import { Options } from 'ng5-slider';
import { isPlatformBrowser } from '@angular/common'; 
import { Color, Size } from 'src/app/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250,
    step: 10,
  };
  isBrowser: boolean;
  colors:Array<Color>;
  sizes:Array<Size> = [{
    name: 'default',
    status: 'false'
  }];
  filterCriteria:Object = {
    size:[],
    colors:[],
    price:{
      maxValue:this.maxValue,
      minValue: this.minValue
    }
  }
  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.colors = [
      {
        name: 'default',
        status: 'active'
      },
      {
        name: 'red',
        status: 'false'
        },
      {
        name: 'green',
        status: 'false'
      },
      {
        name: 'yellow',
        status: 'false'
      },
      {
        name: 'blue',
        status: 'false'
      },
    ]
    this.sizes = [
      {
        name: 'XS',
        status: 'false'
      },
      {
        name: 'S',
        status: 'active'
      },
      {
        name: 'M',
        status: 'false'
      },
      {
        name: 'L',
        status: 'false'
      },
      {
        name: 'XL',
        status: 'false'
      },
      {
        name: 'XXL',
        status: 'false'
      }
    ]
   }

  ngOnInit() {
  }

  selectProp = (prop) => {
    const clr = document.getElementById(`btn-${prop.name}`);

    prop.status = prop.status=='active' ? 'false' : 'active';

    if (prop.status=='false') clr.classList.remove('active')
    
  }

  applyFilter = () => {
    console.log(this.filterCriteria)
  }

  getSelected = (items, type) => {
    Object.keys(items).reduce((acc, key) => {
      if (items[key].status == 'active') this.filterCriteria[type].push(items[key].name);
      return acc;
    });
  }
}
