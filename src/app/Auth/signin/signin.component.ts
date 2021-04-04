import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToasterService } from './../../services/toaster.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
   signInForm: FormGroup;
   submitted=false;
  errorMessage: string;
  hide:boolean = true;


  constructor(private formBuilder:FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toaster: ToasterService) { }

  ngOnInit() {
    
     this.signInForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/), Validators.minLength(6)]]

    });
   

  }

   get f() { return this.signInForm.controls; }


 onChangeView() {
      this.hide=!this.hide;
 }
  onSubmit() {
    this.submitted = true;

     if(this.signInForm.invalid) {
      return;
    }

    const email= this.f.email.value;
     const password = this.f.password.value;

    this.authService.signInUser(email, password).then(
      () => {
       this.router.navigate(['/home']);
       
         this.toaster.show('success', 'Welcome!', 'Please click on setting to be able to add one or more skills one or more experience(s) and finally put an picture and user name  ',15000);
      },
      (error)  => {
        this.errorMessage = error;
        this.toaster.show('error', 'Error Message!', this.errorMessage,15000);
        
      }
    )
  }

}

