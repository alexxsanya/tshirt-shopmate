import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    // this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // // Stop the foreground loading after 5s
    // setTimeout(() => {
    //   this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    // }, 5000);

    // // OR
    // this.ngxService.startBackground('do-background-things');
    // // Do something here...
    // this.ngxService.stopBackground('do-background-things');

    // this.ngxService.startLoader('loader-product'); 
    // setTimeout(() => {
    //   this.ngxService.stopLoader('loader-product'); 
    // }, 5000);
  }

}
