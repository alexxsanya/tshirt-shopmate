import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Options } from 'ng5-slider';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   }

  ngOnInit() {
  }

}
