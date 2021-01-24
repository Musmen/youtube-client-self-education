import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ResultsListComponent } from './pages/results-list/results-list.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { BottomBorderColorizerDirective } from './directives/bottom-border-colorizer.directive';
import { FilterByKeyWordsPipe } from './pipes/filter-by-key-words.pipe';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsItemComponent,
    BottomBorderColorizerDirective,
    FilterByKeyWordsPipe,
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
