import { SigninComponent } from './Auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';

import { UserFormComponent } from './Shared/user-form/user-form.component';
import { AuthGuardService } from './core/auth-guard.service';
import { AuthCheckredirectionComponent } from './auth-check/auth-checkredirection/auth-checkredirection.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 50],
};

const routes: Routes = [

  { path: 'auth/check', loadChildren: 'src/app/auth-check/auth-check.module#AuthCheckModule'},
  { path: 'auth/signin', loadChildren: 'src/app/Auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: 'src/app/home/home.module#HomeModule' },
  { path: 'settings', loadChildren: 'src/app/setting/setting.module#SettingModule' },


  {path: '',redirectTo: 'auth/check',pathMatch: 'full'},
  {path: '**',redirectTo: 'auth/check'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
