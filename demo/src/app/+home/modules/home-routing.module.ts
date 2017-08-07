import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../shared/guards/';
import { HomeComponent } from '../components/';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
