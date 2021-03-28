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
  collapse:boolean =true;

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
  }

  onSignOut() {
    this.authService.signOutUser();
  }
  toggleCollapse(): void {
  this.collapse = !this.collapse;
}

}
