<<<<<<< HEAD

import { FirebaseService } from './firebase.service';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

=======
import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2



@NgModule({
<<<<<<< HEAD

  providers: [
    AuthGuardService,
    FirebaseService,
    AuthService
  ]
=======
  declarations: [],
  imports: [
    CommonModule
  ],

  providers: [
    AuthGuardService,
  ],
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
})
export class CoreModule { }
