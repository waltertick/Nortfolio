import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise <boolean> | boolean {
    return new Promise(
      (resolve,reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true);
            }else {
              this.router.navigate(['/Auth', 'signin']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
