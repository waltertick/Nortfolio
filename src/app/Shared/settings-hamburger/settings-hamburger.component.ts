import { AuthService } from './../../services/auth.service';
import { Component, OnInit , AfterViewInit, ElementRef,ViewChild } from '@angular/core';


@Component({
  selector: 'app-settings-hamburger',
  templateUrl: './settings-hamburger.component.html',
  styleUrls: ['./settings-hamburger.component.scss']
})
export class SettingsHamburgerComponent implements OnInit, AfterViewInit {
@ViewChild("menu", { static: false }) hamburgerMenu: ElementRef;
@ViewChild("mobile_menu", { static: false }) mobileMenu: ElementRef;


  constructor(private elementRef: ElementRef,
              private authService : AuthService) { }

  ngOnInit() {
  }


   ngAfterViewInit() {

    const menu = this.elementRef.nativeElement.querySelector('.menu');
    menu.addEventListener('click', () => {
  if (this.hamburgerMenu.nativeElement.classList.contains('open')) {
    this.hamburgerMenu.nativeElement.classList.remove('open');
    this.mobileMenu.nativeElement.style.width = '0';
  } else {
    this.hamburgerMenu.nativeElement.classList.add('open');
    this.mobileMenu.nativeElement.style.width = '40%';
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

}


