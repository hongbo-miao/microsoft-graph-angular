import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/';
import { UserService } from '../services/';
import { AuthService } from '../../auth/services/';

@Component({
  selector: 'app-home',
  template: `
    <app-contacts
      [users]="users$ | async">
    </app-contacts>
    
    <app-logout
      (logout)="onLogout()">
    </app-logout>
  `
})
export class HomeComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private zone: NgZone,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      this.users$ = this.userService.getUsers();
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
