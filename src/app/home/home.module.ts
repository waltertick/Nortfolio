<<<<<<< HEAD
=======
import { SharedModule } from './../Shared/shared.module';
import { CoreModule } from './../core/core.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
<<<<<<< HEAD
import { HomeComponent } from './home.component';
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    HomeRoutingModule
=======
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    HomeService
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
