<<<<<<< HEAD

import { ToasterService } from './../../services/toaster.service';
=======
import { AuthService } from 'src/app/Auth/auth.service';
import { ToasterService } from '../../Shared/toaster.service';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   signUpForm: FormGroup;
   submitted=false;
  errorMessage: string;
  hide:boolean = true;



  constructor(private formBuilder:FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toaster: ToasterService) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/), Validators.minLength(6)]],
      agreeTerms: [false, Validators.requiredTrue]

    });
  }
  onChangeView() {
      this.hide=!this.hide;
  }

  get f() { return this.signUpForm.controls; }


  onSubmit() {
    this.submitted = true;


    if(this.signUpForm.invalid) {
      return;
    }
     const email= this.f.email.value;
     const password = this.f.password.value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
         this.toaster.show('success', 'Welcome!', 'Please click on settings to be able to add one or more skills one or more experience(s) and finally put an picture and user name  ',5000);
      },
      (error)  => {
        this.errorMessage = error;
        this.toaster.show('error', 'Error Message!', this.errorMessage,5000);

      }
    )
  }

    /*this.toaster.show('warning', 'Check it out!', 'This is a warning alert', 3000);
      */

  }
