<<<<<<< HEAD
=======
import { SharedModule } from './../Shared/shared.module';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
<<<<<<< HEAD
import { SettingComponent } from './setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
=======
import { SettingService } from './setting.service';
import { SettingComponent } from './setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
<<<<<<< HEAD
    CoreModule,
    FormsModule, MatInputModule,
    ReactiveFormsModule
  ]
=======
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    SharedModule
  ]
  , providers: [
    SettingService,
    
  ],
  exports: [
    SettingComponent
  ],
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
})
export class SettingModule { }
