import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ProductsService } from 'src/app/services/products/p.service';
import * as ProductActions from './product.actions';
import { Product } from 'src/app/models/product';

@Injectable()
export class ProductEffects {
  constructor(
      private productService: ProductsService,
      private action$: Actions
  ) {}

  @Effect()
  loadProduct$: Observable<Action> = this.action$.pipe(
    ofType<ProductActions.LoadProduct>(
      ProductActions.ProductActionTypes.LOAD_Product
    ),
    mergeMap((actions: ProductActions.LoadProduct) =>
      this.productService.getProductById(actions.payload).pipe(
        map((product: any) =>
          new ProductActions.LoadProductSucess(product)
        ),
        catchError(err => of(new ProductActions.LoadProductFail(err)))
      )
    )
  );
}
