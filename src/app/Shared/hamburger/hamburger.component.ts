<<<<<<< HEAD

=======
import { AuthService } from '../../Auth/auth.service';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
import { Router } from '@angular/router';
import { Component, OnInit , AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit, AfterViewInit {
@ViewChild("menu", { static: false }) hamburgerMenu: ElementRef;
@ViewChild("mobile_menu", { static: false }) mobileMenu: ElementRef;
@ViewChild("sidebar", { static: false }) sidebar: ElementRef;
@ViewChild("openSidebarBtn", { static: false }) openSidebarBtn: ElementRef;
 ids: Array<String> = ['User_profile', 'Add_skill', 'Add_experiences'];


changeMenu:boolean;

  constructor(private elementRef: ElementRef,
              private router: Router,
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

 // this.openSidebarBtn.nativeElement.addEventListener('click',this.openSidebar())





window.addEventListener('mouseup', (event) => {
  if ( event.target != this.openSidebarBtn.nativeElement) {
    this.openSidebarBtn.nativeElement.classList.remove('open');
     this.sidebar.nativeElement.style.width = '0';

  }
})

window.addEventListener('mouseup', (event) => {
  if ( event.target != this.hamburgerMenu.nativeElement) {
    this.hamburgerMenu.nativeElement.classList.remove('open');
    this.mobileMenu.nativeElement.style.width = '0';

  }
})
  }



   openSidebar() {
       this.sidebar.nativeElement.style.width = '40%';
    }

    closeSidebar() {
       this.sidebar.nativeElement.style.width = '0';
    }


  onSignOut() {
    this.authService.signOutUser();
  }



}

