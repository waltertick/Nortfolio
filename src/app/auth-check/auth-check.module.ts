import { CoreModule } from './../core/core.module';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthCheckRoutingModule } from './auth-check-routing.module';
import { AuthCheckredirectionComponent } from './auth-checkredirection/auth-checkredirection.component';
import { AuthModule } from '../Auth/auth.module';
import { ExperienceActionListComponent } from './experience-action-list/experience-action-list.component';


@NgModule({
  declarations: [AuthCheckredirectionComponent, ExperienceActionListComponent],
  imports: [
    CommonModule,
    AuthCheckRoutingModule,
    AuthModule,
    HomeModule,
    
  ]
})
export class AuthCheckModule { }
