import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    CoreModule,
    FormsModule, MatInputModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
