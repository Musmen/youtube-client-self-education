import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ResultsListComponent } from './pages/results-list/results-list.component';
import { ResultsCardComponent } from './components/results-card/results-card.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DetailedInfoPageComponent } from './pages/detailed-info/detailed-info-page.component';

import { ColorizerByDateDirective } from './directives/colorizer.directive';

import { FilterByKeyWordsPipe } from './pipes/filter-by-key-words/filter-by-key-words.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsCardComponent,
    ColorizerByDateDirective,
    FilterByKeyWordsPipe,
    SortPipe,
    DetailedInfoPageComponent,
    StatisticsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
  ],
  exports: [
    ResultsListComponent,
  ],
})
export class YouTubeModule { }
