import { NgModule } from '@angular/core';
import {
  LoginComponent
} from '../components/';

import { SharedModule } from '../../shared/modules/';
import { LoginRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [

  ]
})
export class LoginModule { }
