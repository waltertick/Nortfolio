import { ExperienceListComponent } from './Shared/experience-list/experience-list.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserFormComponent } from './Shared/user-form/user-form.component';
import { AuthCheckredirectionComponent } from './Shared/auth-checkredirection/auth-checkredirection.component';
import { SkillListComponent } from './Shared/skill-list/skill-list.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: 'auth/signin', component : SigninComponent},
  {path: 'settings/skill', component : SkillListComponent},
  {path: 'auth/check', component : AuthCheckredirectionComponent},
  {path: 'settings/experience', component : ExperienceListComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'settings', canActivate: [AuthGuardService], component: SettingComponent },

  {path: '',redirectTo: 'auth/check',pathMatch: 'full'},
  {path: '**',redirectTo: 'auth/check'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
