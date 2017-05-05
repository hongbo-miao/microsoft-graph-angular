import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../models/';

@Component({
  selector: 'app-contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor="let user of users">{{user.displayName}}</li>
    </ul>
  `
})
export class ContactsComponent {
  @Input() users: User[];
}
