import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  checkAuth:boolean;
  constructor( private authService : AuthService) { }

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
    this.checkAuth=this.authService.redirectHome;

  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
