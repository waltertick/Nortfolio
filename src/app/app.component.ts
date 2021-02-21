import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor() {
   var config= {
     apiKey: "AIzaSyCgmJfgoom6Rbjcknw2S1A0v3dXvgTBnC0",
    authDomain: "angularfirebaseapp-264d9.firebaseapp.com",
    projectId: "angularfirebaseapp-264d9",
    storageBucket: "angularfirebaseapp-264d9.appspot.com",
    messagingSenderId: "791187280667",
    appId: "1:791187280667:web:b38af64362bcc783d939be"
   };
   firebase.initializeApp(config);
 }
}
