import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() name: string;
  @Input() thumbnail: string;
  @Input() price: number;
  @Input() old_price: number;
  @Input() id: number;
  isHovered: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showInfo(){
    this.isHovered = this.isHovered?false:true;
  }

  favorite(){
    console.log("favorited");
  }
}
