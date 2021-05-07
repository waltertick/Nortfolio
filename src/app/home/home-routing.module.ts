<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';
import { HomeComponent } from './home.component';




const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
=======
import { AuthGuardService } from './../core/auth-guard.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const homeRoutes: Routes = [
  { path:'', canActivate: [AuthGuardService], component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  exports: [RouterModule]
})
export class HomeRoutingModule { }
