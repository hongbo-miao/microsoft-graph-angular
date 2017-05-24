import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../models/';
import { HomeService } from '../services/';
import { AuthService } from '../../auth/services/';

@Component({
  selector: 'app-home',
  template: `
    <app-logout
      (logout)="onLogout()">
    </app-logout>

    <app-excel
      [users]="users$ | async"
      (addContactToExcel)="onAddContactToExcel($event)">
    </app-excel>
    
    <app-contacts
      [users]="users$ | async">
    </app-contacts>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  subscription: Subscription;

  constructor(
    private zone: NgZone,
    private homeService: HomeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      this.users$ = this.homeService.getUsers();
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onAddContactToExcel(users: User[]) {
    this.subscription = this.homeService.addContactToExcel(users).subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
