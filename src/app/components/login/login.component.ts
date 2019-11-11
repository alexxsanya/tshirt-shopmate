import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as LoginActions from './state/login.actions';
import { LocalStorageService } from 'src/app/shared/util/localStorageService';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { WindowService } from 'src/app/shared/util/windowService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userStore: any = {};
  constructor(public fb: FormBuilder,
              private store: Store<any>,
              private localStorage: LocalStorageService,
              private ngxService: NgxUiLoaderService,
              private window: WindowService,
  ) {
    this.loginForm = this.fb.group({
      loginEmail: [''],
      loginPass: [null]
    });
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
      }
      setTimeout(() => {
        this.ngxService.stopLoader('loader-login');
      }, 2000);
    });

  }
}
