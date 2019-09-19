import { Component, OnInit, Inject, PLATFORM_ID, asNativeElements } from '@angular/core';
import { Options } from 'ng5-slider';
import { isPlatformBrowser } from '@angular/common';
import { $ } from 'protractor';

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
  colors = [];
  sizes = [];

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

  selectProp(prop){
    const clr = document.getElementById(`btn-${prop.name}`);

    prop.status = prop.status=='active' ? 'false' : 'active';

    if (prop.status=='false') clr.classList.remove('active')
    
  }

}
