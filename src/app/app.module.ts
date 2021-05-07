<<<<<<< HEAD
=======
import { SharedModule } from './Shared/shared.module';
import { SettingModule } from './setting/setting.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './Auth/auth.module';
import { CoreModule } from './core/core.module';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthCheckModule } from './auth-check/auth-check.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './Auth/auth.module';
import { CoreModule } from './core/core.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { SettingModule } from './setting/setting.module';
import { SharedModule } from './Shared/shared.module';
=======



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { AuthCheckredirectionComponent } from './auth-checkredirection/auth-checkredirection.component';
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2




@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

=======
    AuthCheckredirectionComponent
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
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
=======
    SharedModule,
    CoreModule,
    AuthModule,
    HomeModule,
    SettingModule,
    MatInputModule,

    HttpClientModule,
    BrowserAnimationsModule,
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
