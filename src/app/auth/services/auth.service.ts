import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as hello from 'hellojs/dist/hello.all.js';

import { Configs } from 'app/shared/configs/';

@Injectable()
export class AuthService {
  constructor(
    private router: Router
  ) { }

  initAuth() {
    hello.init({
      msft: {
        oauth: {
          version: 2,
          auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
        },
        scope_delim: ' ',
        form: false
      }
    });

    hello.init({
      msft: Configs.appId
    }, {
      redirect_uri: window.location.href
    });

    hello.on('auth.login', auth => {
      if (auth.network === 'msft') {
        this.router.navigate(['/home']);
      }
    });
  }

  login() {
    hello('msft').login({
        scope: 'contacts.read,files.readwrite'
      });
  }

  logout() {
    hello('msft').logout()
      .then(() => {
        this.router.navigate(['/login']);
      }, e => {
        console.error(e.error.message);
      });
  }
}
