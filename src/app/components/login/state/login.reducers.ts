import * as LoginActions from './login.actions';
import * as fromRoot from 'src/app/state/app-state';

export interface UserState {
  user: {};
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  products: UserState;
}

export const initialState: UserState = {
  user: {},
  loading: false,
  loaded: false,
  error: ''
};

export function userReducer(
  state = initialState,
  action: LoginActions.Action
): UserState {

  switch ( action.type ) {
    case LoginActions.LoginActionTypes.LOAD_LOGIN: {
      return {
        ...state,
        loading: true
      };
    }
    case LoginActions.LoginActionTypes.LOAD_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload
      };
    }
    case LoginActions.LoginActionTypes.LOAD_LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        user: {},
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
