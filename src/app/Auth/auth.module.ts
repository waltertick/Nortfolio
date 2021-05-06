import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { AuthService } from '../core/auth.service';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule, MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthService
  ],
  exports: [
    SigninComponent
  ],
})
export class AuthModule { }
