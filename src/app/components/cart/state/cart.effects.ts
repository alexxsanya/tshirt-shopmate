import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as LoginActions from './cart.actions';
import { UserService } from 'src/app/services/user/user.service';

@Injectable()
export class LoginEffects {
  constructor(
      private userService: UserService,
      private action$: Actions
  ) {}

  @Effect()
  loadLogin$: Observable<Action> = this.action$.pipe(
    ofType<LoginActions.LoadLogin>(
        LoginActions.LoginActionTypes.LOAD_LOGIN
    ),
    map( (action: LoginActions.LoadLogin) => action.payload ),
      mergeMap((user) =>
      this.userService.loginUser(user).pipe(
        map((loggedInUser: any) =>
          new LoginActions.LoadLoginSucess(loggedInUser)
        ),
        catchError(err => of(new LoginActions.LoadLoginFail(err)))
      )
    )

  );
}
