import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
settingsParam:boolean;

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise<void> (
      (resolve, reject)  => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()  => {
            resolve() ;
            
          },
          (error)  => {
            reject(error);
            
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
            
          },
          (error)  => {
            reject(error);
            
          }
        );
      }
    );
  }
  

  signOutUser() {
    firebase.auth().signOut();
  }

  changeMenu(){
    this.settingsParam=true;
  }
}
