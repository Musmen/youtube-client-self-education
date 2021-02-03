import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CanLeaveAuthGuard } from './guards/can-leave-auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canDeactivate: [CanLeaveAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
