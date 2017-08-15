import { Component, OnInit, OnDestroy } from '@angular/core';
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
      <tr *ngFor="let user of users">
        <td>{{user.displayName}}</td>
        <td>{{user.emailAddresses[0].address}}</td>
      </tr>
    </table>
    <button (click)="onAddContactToExcel()">Write to Excel</button>
    <button (click)="onLogout()">Logout</button>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  users: User[];
  subsGetUsers: Subscription;
  subsAddContactToExcel: Subscription;

  constructor(
    private homeService: HomeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subsGetUsers = this.homeService.getUsers().subscribe(users => this.users = users);
  }

  ngOnDestroy() {
    this.subsGetUsers.unsubscribe();
    this.subsAddContactToExcel.unsubscribe();
  }

  onAddContactToExcel() {
    this.subsAddContactToExcel = this.homeService.addContactToExcel(this.users).subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
