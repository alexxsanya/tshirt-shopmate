import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export enum ProductsActionTypes {
  LOAD_PRODUCTS = '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL = '[Product] Load Products Fail'
}


export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSucess implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload: string) {}
}

export type Action =
| LoadProducts
| LoadProductsSucess
| LoadProductsFail;

