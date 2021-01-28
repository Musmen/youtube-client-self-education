import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsListComponent } from '@youtube/pages/results-list/results-list.component';
import { LoginPageComponent } from '@auth/pages/login-page/login-page.component';
import { NotFoundComponent } from '@core/components/not-found/not-found/not-found.component';
import { DetailedInfoPageComponent } from '@youtube/pages/detailed-info/detailed-info-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ResultsListComponent },
  { path: 'info', component: DetailedInfoPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
