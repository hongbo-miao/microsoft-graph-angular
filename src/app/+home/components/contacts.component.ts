import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../models/';

@Component({
  selector: 'app-contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  `
})
export class ContactsComponent {
  @Input() users: User[];
}
