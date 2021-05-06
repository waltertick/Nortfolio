import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCheckredirectionComponent } from './auth-checkredirection/auth-checkredirection.component';


const routes: Routes = [
  { path: '', component: AuthCheckredirectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthCheckRoutingModule { }
