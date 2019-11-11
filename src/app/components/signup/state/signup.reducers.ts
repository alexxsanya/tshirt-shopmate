import * as SignupActions from './signup.actions';
import * as fromRoot from 'src/app/state/app-state';

export interface CreatedUserState {
  createduser: {};
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  createduser: CreatedUserState;
}

export const initialState: CreatedUserState = {
  createduser: {},
  loading: false,
  loaded: false,
  error: ''
};

export function createdUserReducer(
  state = initialState,
  action: SignupActions.Action
): CreatedUserState {

  switch ( action.type ) {
    case SignupActions.SignupActionTypes.LOAD_SIGNUP: {
      return {
        ...state,
        loading: true
      };
    }
    case SignupActions.SignupActionTypes.LOAD_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        createduser: action.payload
      };
    }
    case SignupActions.SignupActionTypes.LOAD_SIGNUP_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        createduser: {},
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
