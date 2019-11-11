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
  @Input() discounted_price: number;
  @Input() id: string;
  isHovered: boolean = false;

  constructor() { }

  ngOnInit() {

    this.id = btoa(this.id);

  }

  showInfo(){
    this.isHovered = this.isHovered?false:true;
  }

  favorite(){
    console.log("favorited");
  }
}
