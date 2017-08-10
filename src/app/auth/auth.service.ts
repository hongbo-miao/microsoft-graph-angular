import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as hello from 'hellojs/dist/hello.all.js';

import { Configs } from '../shared/configs';

@Injectable()
export class AuthService {
  constructor(
    private zone: NgZone,
    private router: Router
  ) { }

  initAuth() {
    hello.init({
        msft: {
          id: Configs.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.href }
    );
  }

  login() {
    hello('msft').login({ scope: Configs.scope }).then(
      () => {
        this.zone.run(() => {
          this.router.navigate(['/home']);
        });
      },
      e => console.error(e.error.message)
    );
  }

  logout() {
    hello('msft').logout().then(
      () => this.router.navigate(['/']),
      e => console.error(e.error.message)
    );
  }
}
