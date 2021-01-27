import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ResultsListComponent } from './pages/results-list/results-list.component';
import { ResultsCardComponent } from './components/results-card/results-card.component';

import { BottomBorderColorizerDirective } from './directives/bottom-border-colorizer.directive';

import { FilterByKeyWordsPipe } from './pipes/filter-by-key-words/filter-by-key-words.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { DetailedInfoPageComponent } from './pages/detailed-info/detailed-info-page/detailed-info-page.component';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsCardComponent,
    BottomBorderColorizerDirective,
    FilterByKeyWordsPipe,
    SortPipe,
    DetailedInfoPageComponent,
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
