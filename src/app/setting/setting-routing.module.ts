import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';
import { SettingComponent } from './setting.component';


const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: SettingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
