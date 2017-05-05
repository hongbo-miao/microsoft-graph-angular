import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { LoginModule } from './+login/modules/';
import { HomeModule } from './+home/modules/';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './+home/services/';
import { AuthService } from './auth/services/';

import { AuthGuard } from './shared/guards/';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    LoginModule,
    HomeModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,

    BaseRequestOptions
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
