import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as SignupActions from './state/signup.actions';
import { LocalStorageService } from 'src/app/shared/util/localStorageService';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { WindowService } from 'src/app/shared/util/windowService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  userStore: any = {};
  constructor(public fb: FormBuilder,
              private store: Store<any>,
              private localStorage: LocalStorageService,
              private ngxService: NgxUiLoaderService,
              private window: WindowService,
  ) {
    this.signupForm = this.fb.group({
      userEmail: [''],
      userPass: [null],
      userPass2: [null]
    });
  }

  ngOnInit() {

  }

  createUser = () => {
    this.ngxService.startLoader('loader-signup');
    const data = {
      name: this.signupForm.get('userEmail').value,
      email: this.signupForm.get('userEmail').value,
      password: this.signupForm.get('userPass').value
    };

    this.store.dispatch(new SignupActions.LoadSignup(data));
    this.store.subscribe((state) => {
      this.userStore = state.createduser.createduser;
      console.log(this.userStore);
      if (this.userStore.accessToken !== undefined) {
        this.localStorage.set('accessToken', this.userStore.accessToken);
        this.window.reload();
      }
      setTimeout(() => {
        this.ngxService.stopLoader('loader-signup');
      }, 2000);
    });

  }
}
