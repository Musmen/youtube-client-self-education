import { Component } from '@angular/core';

import { StateService } from '@core/services/state/state.service';
import { YouTubeService } from '@youtube/services/youtube/youtube.service';

import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { SortingSettings } from '@core/models/sortingSettings.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {
  constructor(
    private youTubeService: YouTubeService,
    private stateService: StateService,
  ) { }

  public get searchResultsCards(): SearchResultCard[] {
    return this.youTubeService.searchResultsCards$.getValue();
  }

  public get searchError(): boolean {
    return this.youTubeService.searchError;
  }

  public get searchErrorMessage(): string {
    return this.youTubeService.searchErrorMessage;
  }

  public get filteringRequest(): string {
    return this.stateService.filteringRequest;
  }

  public get sortingSettings(): SortingSettings {
    return this.stateService.sortingSettings;
  }
}
