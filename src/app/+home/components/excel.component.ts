import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../models/';

@Component({
  selector: 'app-excel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="onAddContactToExcel()">Write to Excel</button>
  `
})
export class ExcelComponent {
  @Input() users: User[];
  @Output() addContactToExcel = new EventEmitter<User[]>();

  onAddContactToExcel() {
    this.addContactToExcel.emit(this.users);
  }
}
