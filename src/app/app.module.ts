
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthCheckModule } from './auth-check/auth-check.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './Auth/auth.module';
import { CoreModule } from './core/core.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { SettingModule } from './setting/setting.module';
import { SharedModule } from './Shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    AuthModule,
    SettingModule,
    AuthCheckModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
