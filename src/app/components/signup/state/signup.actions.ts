import { Action } from '@ngrx/store';

export enum SignupActionTypes {
  LOAD_SIGNUP = '[Signup] Load Signup',
  LOAD_SIGNUP_SUCCESS = '[Signup] Load Signup Success',
  LOAD_SIGNUP_FAIL = '[Signup] Load Signup Fail'
}


export class LoadSignup implements Action {
  readonly type = SignupActionTypes.LOAD_SIGNUP;
  constructor(public payload: any) {}
}

export class LoadSignupSucess implements Action {
  readonly type = SignupActionTypes.LOAD_SIGNUP_SUCCESS;

  constructor(public payload: {}) {}
}

export class LoadSignupFail implements Action {
  readonly type = SignupActionTypes.LOAD_SIGNUP_FAIL;
  constructor(public payload: string) {}
}

export type Action =
| LoadSignup
| LoadSignupSucess
| LoadSignupFail;

