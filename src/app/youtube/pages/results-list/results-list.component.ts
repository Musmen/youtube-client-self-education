import { Component } from '@angular/core';

import { StateService } from '@core/services/state/state.service';
import { SearchService } from '@youtube/services/search/search.service';

import { SearchResultCard } from '@youtube/models/searchResultCard.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {
  constructor(
    private searchService: SearchService,
    private stateService: StateService,
  ) { }

  public get searchResultsCards(): SearchResultCard[] {
    return this.searchService.searchResultsCards;
  }

  public get searchError(): boolean {
    return this.searchService.searchError;
  }

  public get searchErrorMessage(): string {
    return this.searchService.searchErrorMessage;
  }

  public get filteringRequest(): string {
    return this.stateService.filteringRequest;
  }
}
