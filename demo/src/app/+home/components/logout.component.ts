import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="onLogout()">Logout</button>
  `
})
export class LogoutComponent {
  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
