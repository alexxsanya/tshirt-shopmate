import * as ProductsActions from './products.actions';
import { Product } from 'src/app/models/product';
import * as fromRoot from 'src/app/state/app-state';
import { stat } from 'fs';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  products: ProductsState;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  loaded: false,
  error: ''
};

export function productsReducer(
  state = initialState,
  action: ProductsActions.Action
): ProductsState {

  switch ( action.type ) {
    case ProductsActions.ProductsActionTypes.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductsActions.ProductsActionTypes.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.payload
      };
    }
    case ProductsActions.ProductsActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        products: [],
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
