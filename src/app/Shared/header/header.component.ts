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
colorH:string;
colorS:string;
fontWeightH:string="bold";
fontWeightS:string;
clickerH:number=0;
clickerS:number=0;
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
  }

  onSignOut() {
    this.authService.signOutUser();

  }

    updateSettingColor(){


      this.colorS="#65B79F";
      this.fontWeightS="bold";
      this.clickerS+=1;
      this.clickerH=0;
      if((this.clickerS>0)&&(this.clickerH==0)){
        this.colorH="#6B7588";
        this.fontWeightH="normal";
      }

    }
    updateHomeColor(){
      this.colorH="#65B79F";
      this.fontWeightH="bold";
      this.clickerH+=1;
      this.clickerS=0;
      if((this.clickerH>0)&&(this.clickerS==0)){
        this.colorS="#6B7588";
        this.fontWeightS="normal";
      }
    }
}
