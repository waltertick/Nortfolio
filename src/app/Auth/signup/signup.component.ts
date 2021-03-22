import { ToasterService } from './../../services/toaster.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   signUpForm: FormGroup;
  errorMessage: string;
  hide:boolean = true;
  

  constructor(private formBuilder:FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toaster: ToasterService) { }

  ngOnInit() {
    this.initForm();
  }
  onChangeView() {
      this.hide=!this.hide;
  }
    initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]

    });
}



  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
         this.toaster.show('success', 'Welcome!', 'Please click on setting to be able to add one or more skills one or more experience(s) and finally put an picture and user name  ',20000);
      },
      (error)  => {
        this.errorMessage = error;
        this.toaster.show('error', 'Error Message!', this.errorMessage,20000);
       
      }
    )
  }
 
    /*this.toaster.show('warning', 'Check it out!', 'This is a warning alert', 3000);
      */

  }
