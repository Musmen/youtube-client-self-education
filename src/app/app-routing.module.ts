import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';

import { NotFoundComponent } from '@core/components/not-found/not-found/not-found.component';

const routes: Routes = [
  { path: 'main', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'home',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YouTubeModule),
    canLoad: [AuthGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
