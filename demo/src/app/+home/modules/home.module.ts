import { NgModule } from '@angular/core';

import {
  ContactsComponent,
  ExcelComponent,
  LogoutComponent,

  HomeComponent
} from '../components/';

import { SharedModule } from '../../shared/modules/';
import { HomeRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ExcelComponent,
    LogoutComponent,

    HomeComponent
  ],
  providers: [

  ]
})
export class HomeModule { }
