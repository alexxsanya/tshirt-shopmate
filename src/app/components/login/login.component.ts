import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as LoginActions from './state/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userStore:any = {};
  constructor(public fb: FormBuilder, private store: Store<any>) {
    this.loginForm = this.fb.group({
      loginEmail: [''],
      loginPass: [null]
    });
  }

  ngOnInit() {

  }

  loginUser = () => {
    const formData: any = new FormData();
    formData.append('email', this.loginForm.get('loginEmail').value);
    formData.append('password', this.loginForm.get('loginPass').value);

    this.store.dispatch(new LoginActions.LoadLogin(formData));
    this.store.subscribe((state) => {
      this.userStore = state.user.user;
      console.log(this.userStore);
    });

  }
}
