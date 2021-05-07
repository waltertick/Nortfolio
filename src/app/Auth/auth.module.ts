import { CoreModule } from './../core/core.module';
<<<<<<< HEAD
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
<<<<<<< HEAD
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { AuthService } from '../core/auth.service';

=======
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2


@NgModule({
  declarations: [
    SigninComponent,
<<<<<<< HEAD
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
=======
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
  ],
  exports: [
    SigninComponent,
    SignupComponent
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  ],
})
export class AuthModule { }
