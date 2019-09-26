import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  rating: number = 2;
  constructor() { }

  ngOnInit() {
  }

}