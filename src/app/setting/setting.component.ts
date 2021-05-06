import { ToasterService } from './../services/toaster.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit , AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit, AfterViewInit {
  @ViewChild("sidebar", { static: false }) sidebar: ElementRef;
  @ViewChild("openSidebarBtn", { static: false }) openSidebarBtn: ElementRef;
  userProfileForm: FormGroup;
   submitted=false;
   ids: Array<String> = ['userProfile', 'addSkill', 'addExperiences'];

  errorMessage: string;
  hide:boolean = true;
  urlLink:string="assets/Images/pexels-2.jpg";




  constructor(private formBuilder:FormBuilder,
              private authService: AuthService,
              private elementRef: ElementRef,
              private router: Router,
              private toaster: ToasterService) { }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/), Validators.minLength(6)]]


    });
  }

  ngAfterViewInit() {

 // this.openSidebarBtn.nativeElement.addEventListener('click',this.openSidebar())

window.addEventListener('mouseup', (event) => {
  if ( event.target != this.openSidebarBtn.nativeElement) {
    this.openSidebarBtn.nativeElement.classList.remove('open');
     this.sidebar.nativeElement.style.width = '0';

  }
})


  }



   openSidebar() {
       this.sidebar.nativeElement.style.width = '40%';
    }

    closeSidebar() {
       this.sidebar.nativeElement.style.width = '0';
    }


  selectFiles(event) {
    if( event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload= (event:any)=>{
        this.urlLink = event.target.result
      }
    }
  }

  onChangeView() {
      this.hide=!this.hide;
  }

  get f() { return this.userProfileForm.controls; }


  onSubmit() {
    this.submitted = true;


    if(this.userProfileForm.invalid) {
      return;
    }
     const email= this.f.email.value;
     const password = this.f.password.value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
         this.toaster.show('success', 'Welcome!', 'Please click on setting to be able to add one or more skills one or more experience(s) and finally put an picture and user name  ',5000);
      },
      (error)  => {
        this.errorMessage = error;
        this.toaster.show('error', 'Error Message!', this.errorMessage,5000);

      }
    )
  }
}
