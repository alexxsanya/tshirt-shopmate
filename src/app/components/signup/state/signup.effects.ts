import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as SignupActions from './signup.actions';
import { UserService } from 'src/app/services/user/user.service';

@Injectable()
export class SignupEffects {
  constructor(
      private userService: UserService,
      private action$: Actions
  ) {}

  @Effect()
  loadSignup$: Observable<Action> = this.action$.pipe(
    ofType<SignupActions.LoadSignup>(
        SignupActions.SignupActionTypes.LOAD_SIGNUP
    ),
    map( (action: SignupActions.LoadSignup) => action.payload ),
      mergeMap((user) =>
      this.userService.createUser(user).pipe(
        map((createdUser: any) =>
          new SignupActions.LoadSignupSucess(createdUser)
        ),
        catchError(err => of(new SignupActions.LoadSignupFail(err)))
      )
    )

  );
}
