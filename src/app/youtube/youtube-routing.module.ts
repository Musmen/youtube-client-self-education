import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsListComponent } from './pages/results-list/results-list.component';
import { DetailedInfoPageComponent } from './pages/detailed-info/detailed-info-page.component';

const routes: Routes = [
  { path: '', component: ResultsListComponent },
  { path: 'info', component: DetailedInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YouTubeRoutingModule { }
