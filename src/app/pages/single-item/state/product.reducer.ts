import * as ProductActions from './product.actions';
import { Product } from 'src/app/models/product';
import * as fromRoot from 'src/app/state/app-state';
import { stat } from 'fs';

export interface ProductState {
  product: {};
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  product: ProductState;
}

export const initialState: ProductState = {
  product: {},
  loading: false,
  loaded: false,
  error: ''
};

export function productReducer(
  state = initialState,
  action: ProductActions.Action
): ProductState {

  switch ( action.type ) {
    case ProductActions.ProductActionTypes.LOAD_Product: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductActions.ProductActionTypes.LOAD_Product_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        product: action.payload
      };
    }
    case ProductActions.ProductActionTypes.LOAD_Product_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        product: [],
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
