import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
redirectHome:boolean;
  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise<void> (
      (resolve, reject)  => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()  => {
            resolve() ;
            this.redirectHome=true;
          },
          (error)  => {
            reject(error);
            this.redirectHome=false;
          }
        );
      }
    );
  }
  signInUser(email: string, password: string) {
    return new Promise<void> (
      (resolve, reject)  => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()  => {
            resolve() ;
            this.redirectHome=true;
          },
          (error)  => {
            reject(error);
            this.redirectHome=false;
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}
