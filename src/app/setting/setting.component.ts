import { ToasterService } from './../services/toaster.service';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  userProfileForm: FormGroup;
   submitted=false;
  errorMessage: string;
  hide:boolean = true;
  urlLink:string="assets/Images/ketebo.png";

  constructor(private formBuilder:FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toaster: ToasterService) { }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/), Validators.minLength(6)]]


    });
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
