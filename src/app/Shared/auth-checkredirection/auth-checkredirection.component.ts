import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions


@Component({
  selector: 'app-auth-checkredirection',
  templateUrl: './auth-checkredirection.component.html',
  styleUrls: ['./auth-checkredirection.component.scss']
})
export class AuthCheckredirectionComponent implements OnInit {
isAuth: boolean;
  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          if(user) {
          this.isAuth = true;
          //this.router.navigate(['/home']);
          }else {
            this.isAuth = false;
           // this.router.navigate(['/auth/signin']);
          }
        }
    );
    
  }
  

}
