import { Component } from '@angular/core';

import { SearchService } from '@youtube/services/search/search.service';
import { FilterService } from '@core/services/filter/filter.service';

import { SearchResultCard } from '@youtube/models/searchResultCard.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {
  constructor(
    private searchService: SearchService,
    private filterService: FilterService,
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
    return this.filterService.filteringRequest;
  }
}
