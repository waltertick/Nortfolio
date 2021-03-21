import { PinkToast } from './pink.toast';

import { AuthGuardService } from './services/auth-guard.service';
import {
  ToastrModule,
  ToastContainerModule,
  ToastNoAnimationModule,
} from 'ngx-toastr';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { HeaderComponent } from './Shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './Shared/profile/profile.component';
import { SkillListComponent } from './Shared/skill-list/skill-list.component';
import { SingleSkillComponent } from './Shared/single-skill/single-skill.component';
import { ExperienceListComponent } from './Shared/experience-list/experience-list.component';
import { SingleExperienceComponent } from './Shared/single-experience/single-experience.component';
import { ExperienceActionListComponent } from './Shared/experience-action-list/experience-action-list.component';
import { SingleExperienceActionComponent } from './Shared/single-experience-action/single-experience-action.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HomeService } from './services/home.service';
import { SettingService } from './services/setting.service';
import { SkillFormComponent } from './Shared/skill-form/skill-form.component';
import { UserFormComponent } from './Shared/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    SettingComponent,
    ProfileComponent,
    SkillListComponent,
    SingleSkillComponent,
    ExperienceListComponent,
    SingleExperienceComponent,
    ExperienceActionListComponent,
    SingleExperienceActionComponent,
    SkillFormComponent,
    UserFormComponent,
    PinkToast
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot(
      {
        toastComponent: PinkToast,
      }
    ),
    ToastContainerModule

  ],
  providers: [
    AuthGuardService,
    AuthService,
    HomeService,
    SettingService

  ],
  entryComponents: [PinkToast],
  bootstrap: [AppComponent]
})
export class AppModule { }
