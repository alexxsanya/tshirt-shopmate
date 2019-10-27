import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export enum LoginActionTypes {
  LOAD_LOGIN = '[Login] Load Login',
  LOAD_LOGIN_SUCCESS = '[Login] Load Login Success',
  LOAD_LOGIN_FAIL = '[Login] Load Logun Fail'
}


export class LoadLogin implements Action {
  readonly type = LoginActionTypes.LOAD_LOGIN;
  constructor(public payload: {}) {}
}

export class LoadLoginSucess implements Action {
  readonly type = LoginActionTypes.LOAD_LOGIN_SUCCESS;

  constructor(public payload: {}) {}
}

export class LoadLoginFail implements Action {
  readonly type = LoginActionTypes.LOAD_LOGIN_FAIL;
  constructor(public payload: string) {}
}

export type Action =
| LoadLogin
| LoadLoginSucess
| LoadLoginFail;

