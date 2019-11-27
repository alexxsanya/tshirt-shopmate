import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { LocalStorageService } from './localStorageService';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept = (req, next) => {
    const localStorage = this.injector.get(LocalStorageService);

    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${localStorage.get('accessToken', undefined)}`
      }
    });

    return next.handle(tokenizedReq);
  }
}
