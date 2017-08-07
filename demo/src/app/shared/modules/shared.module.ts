import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../auth/services/';
import { HttpService } from '../services/';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule
];

const PIPES = [];

const COMPONENTS = [];

@NgModule({
  imports: [
    MODULES
  ],
  declarations: [
    PIPES,
    COMPONENTS
  ],
  providers: [
    AuthService,
    HttpService
  ],
  exports: [
    MODULES,
    PIPES,
    COMPONENTS
  ]
})
export class SharedModule { }
