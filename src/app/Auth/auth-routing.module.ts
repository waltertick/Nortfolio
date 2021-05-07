import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


<<<<<<< HEAD
const routes: Routes = [
=======
const authRoutes: Routes = [
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  { path: '', component: SigninComponent ,
    children: [
      { path: 'auth/signup', component: SignupComponent,}
    ]
},

];
<<<<<<< HEAD
@NgModule({
  imports: [RouterModule.forChild(routes)],
=======

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  exports: [RouterModule]
})
export class AuthRoutingModule { }
