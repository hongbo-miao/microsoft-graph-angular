import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { User } from './user.model';
import { HomeService } from './home.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <table>
      <tr>
        <th align="left">Name</th>
        <th align="left">Email</th>
      </tr>
      <tr *ngFor="let user of (users$ | async)">
        <td>{{user.displayName}}</td>
        <td>{{user.emailAddresses[0].address}}</td>
      </tr>
    </table>
    <button (click)="onAddContactToExcel()">Write to Excel</button>
    <button (click)="onLogout()">Logout</button>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  subscription: Subscription;

  constructor(
    private homeService: HomeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.users$ = this.homeService.getUsers();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddContactToExcel(users: User[]) {
    this.subscription = this.homeService.addContactToExcel(users).subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
