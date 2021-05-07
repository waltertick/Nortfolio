import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

<<<<<<< HEAD
import { ToasterService } from './../../services/toaster.service';
=======
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
import * as firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
<<<<<<< HEAD
import { AuthService } from 'src/app/core/auth.service';

=======
import { ToasterService } from 'src/app/Shared/toaster.service';
import { AuthService } from '../auth.service';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2

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

         this.toaster.show('success', 'Welcome!', 'Please click on settings to be able to add one or more skills one or more experience(s) and finally put an picture and user name  ',15000);
      },
      (error)  => {
        this.errorMessage = error;
        this.toaster.show('error', 'Error Message!', this.errorMessage,15000);

      }
    )
  }

}

