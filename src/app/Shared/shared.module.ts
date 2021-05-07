<<<<<<< HEAD
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HeaderComponent } from './header/header.component';
import { ReadMoreComponent } from './read-more/read-more';
import { ToasterContainerComponent } from './toaster-container/toaster-container.component';
import { ToasterComponent } from './toaster/toaster.component';
=======

import { ToasterService } from './toaster.service';
import { CoreModule } from './../core/core.module';
import { ToasterContainerComponent } from './toaster-container/toaster-container.component';
import { ReadMoreComponent } from './read-more/read-more';
import { ToasterComponent } from './toaster/toaster.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ExperienceActionListComponent } from './experience-action-list/experience-action-list.component';

>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2


@NgModule({
  declarations: [
<<<<<<< HEAD

    HeaderComponent,
    ToasterContainerComponent, ToasterComponent,
    ReadMoreComponent,
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CoreModule
  ],
  exports: [

    HeaderComponent,
    ToasterContainerComponent, ToasterComponent,
    ReadMoreComponent,
    HamburgerComponent
=======
    HamburgerComponent,
    HeaderComponent,
    ToasterComponent,
    ToasterContainerComponent,
    ReadMoreComponent,
    ExperienceActionListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    
  ],
  providers: [
    ToasterService
  ],
  exports: [
    HamburgerComponent,
    HeaderComponent,
    ToasterComponent,
    ToasterContainerComponent,
    ReadMoreComponent,
    ExperienceActionListComponent
>>>>>>> 5a21b8e7d05b3422e063a013726fd725e017a2a2
  ]
})
export class SharedModule { }
