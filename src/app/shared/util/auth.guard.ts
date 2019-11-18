import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { WindowService } from './windowService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: UserService,
    private window: WindowService) {}

  canActivate() {
    if (!this.authService.isTokenExpired()) {
      return true;
    }
    this.window.alert('session expired, please login again');
    this.authService.logOut();
    // this.router.navigate(['/login']);
    return false;
  }

}
