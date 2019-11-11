import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ProductsService } from 'src/app/services/products/p.service';
import * as ProductsActions from './products.actions';
import { Product } from 'src/app/models/product';

@Injectable()
export class ProductsEffects {
  constructor(
      private productsService: ProductsService,
      private action$: Actions
  ) {}

  @Effect()
  loadProducts$: Observable<Action> = this.action$.pipe(
    ofType<ProductsActions.LoadProducts>(
      ProductsActions.ProductsActionTypes.LOAD_PRODUCTS
    ),
    mergeMap((actions: ProductsActions.LoadProducts) =>
      this.productsService.getProducts(101).pipe(
        map((products: any) =>
          new ProductsActions.LoadProductsSucess(products)
        ),
        catchError(err => of(new ProductsActions.LoadProductsFail(err)))
      )
    )
  );
}
