import { AuthService } from './../../services/auth.service';

import { Component, OnInit , AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
@ViewChild("menu", { static: false }) hamburgerMenu: ElementRef;
@ViewChild("mobile_menu", { static: false }) mobileMenu: ElementRef;
isAuth: boolean;
onSettingsPage:boolean;

  constructor(private authService : AuthService,
                private elementRef: ElementRef
                ) { }

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
this.onSettingsPage=this.authService.settingsParam;
console.log(this.onSettingsPage,this.authService.settingsParam);

  }

   ngAfterViewInit() {

    const menu = this.elementRef.nativeElement.querySelector('.menu');
    menu.addEventListener('click', () => {
  if (this.hamburgerMenu.nativeElement.classList.contains('open')) {
    this.hamburgerMenu.nativeElement.classList.remove('open');
    this.mobileMenu.nativeElement.style.width = '0';
  } else {
    this.hamburgerMenu.nativeElement.classList.add('open');
    this.mobileMenu.nativeElement.style.width = '60%';
  }
});



window.addEventListener('mouseup', (event) => {
  if ( event.target != this.hamburgerMenu.nativeElement) {
    this.hamburgerMenu.nativeElement.classList.remove('open');
    this.mobileMenu.nativeElement.style.width = '0';

  }
})

   
   console.log(this.onSettingsPage);
  }

  onSignOut() {
    this.authService.signOutUser();
}

onChangeHamburger() {
    this.authService.changeMenu();

  }

}
