import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export enum ProductActionTypes {
  LOAD_Product = '[Product] Load Product',
  LOAD_Product_SUCCESS = '[Product] Load Product Success',
  LOAD_Product_FAIL = '[Product] Load Product Fail'
}


export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LOAD_Product;
}

export class LoadProductSucess implements Action {
  readonly type = ProductActionTypes.LOAD_Product_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductActionTypes.LOAD_Product_FAIL;
  constructor(public payload: string) {}
}

export type Action =
| LoadProduct
| LoadProductSucess
| LoadProductFail;

