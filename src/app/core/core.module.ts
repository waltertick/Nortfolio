
import { FirebaseService } from './firebase.service';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';




@NgModule({

  providers: [
    AuthGuardService,
    FirebaseService,
    AuthService
  ]
})
export class CoreModule { }
