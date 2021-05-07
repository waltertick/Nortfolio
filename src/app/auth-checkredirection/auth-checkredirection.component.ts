<<<<<<< HEAD:src/app/auth-check/auth-checkredirection/auth-checkredirection.component.ts

=======
import { AuthService } from 'src/app/Auth/auth.service';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2:src/app/auth-checkredirection/auth-checkredirection.component.ts
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
isConnected : boolean ;
isAuth : boolean ;
  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          if(user) {
          this.isAuth = true;

          }else {
            this.isAuth = false;

          }
        }
    );
    this.isConnected=this.isAuth;

  }

}
