import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as hello from 'hellojs/dist/hello.all.js';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    const msft = hello('msft').getAuthResponse();
    const currentTime = (new Date()).getTime() / 1000;

    if (msft && msft.access_token && msft.expires > currentTime) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
