import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() name;
  @Input() thumbnail;
  isHovered: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showInfo(event: Event){
    this.isHovered = this.isHovered?false:true;
  }
}
