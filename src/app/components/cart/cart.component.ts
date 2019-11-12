import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as LoginActions from './state/cart.actions';
import { LocalStorageService } from 'src/app/shared/util/localStorageService';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { WindowService } from 'src/app/shared/util/windowService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  loginForm: FormGroup;
  userStore: any = {};
  cartCount = 1;
  cartItems = [{
    id: 1,
    name: 'Blue Tshirt',
    price: '15',
    qty: 1,
    thumbnail: 'https://www.jumia.ug/images/local/placeholder/placeholder_xs_1.jpg'
  }, {
    id: 1,
    name: 'Black Tshirt',
    price: '55',
    qty: 2,
    thumbnail: 'https://www.jumia.ug/images/local/placeholder/placeholder_xs_1.jpg'
  },
];

  constructor(public fb: FormBuilder,
              private store: Store<any>,
              private localStorage: LocalStorageService,
              private ngxService: NgxUiLoaderService,
              private window: WindowService,
  ) {
    this.cartCount = this.cartItems.length;
  }

  ngOnInit() {

  }

  loginUser = () => {
    this.ngxService.startLoader('loader-login');
    const data = {
      email: this.loginForm.get('loginEmail').value,
      password: this.loginForm.get('loginPass').value
    };

    this.store.dispatch(new LoginActions.LoadLogin(data));
    this.store.subscribe((state) => {
      this.userStore = state.user.user;
      if (this.userStore.accessToken !== undefined) {
        this.localStorage.set('accessToken', this.userStore.accessToken);
        this.window.reload();
      } else {
        console.log(`Login Failed : `, this.userStore );
        setTimeout(() => {
          this.ngxService.stopLoader('loader-login');
        }, 2000);
      }
    });

  }
}
