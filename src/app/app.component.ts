import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/services/';

@Component({
  selector: 'app-root',
  template: `
    <h2>Hello Microsoft Graph!</h2>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.initAuth();
  }
}
