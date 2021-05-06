import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: SigninComponent ,
    children: [
      { path: 'auth/signup', component: SignupComponent,}
    ]
},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
