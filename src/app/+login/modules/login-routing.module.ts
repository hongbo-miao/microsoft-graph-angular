import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../components/';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
