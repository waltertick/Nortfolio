import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HeaderComponent } from './header/header.component';
import { ReadMoreComponent } from './read-more/read-more';
import { ToasterContainerComponent } from './toaster-container/toaster-container.component';
import { ToasterComponent } from './toaster/toaster.component';


@NgModule({
  declarations: [

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
  ]
})
export class SharedModule { }
