import { Component } from '@angular/core';

import {
  getViewCountNumber,
  getDateNumber,
  sortingBy,
} from '@common/helper';

import { ResponseList } from '@youtube/models/response.model';
import { ERROR_MESSAGES } from '@common/constants';
import { YOU_TUBE_RESPONSE } from '../mock-data/mock-search-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public searchRequestError: boolean = false;
  public filteringRequest: string;
  public searchResult: ResponseList;

  public ERROR_MESSAGES: {} = ERROR_MESSAGES;

  constructor() { }

  public fetchYouTube(searchRequest: string): ResponseList {
    if (searchRequest) {
      return YOU_TUBE_RESPONSE;
    }
  }

  public startSearch(searchRequest: string): void {
    if (!Boolean(searchRequest)) {
      this.searchRequestError = true;
      return;
    }

    this.searchRequestError = false;
    this.searchResult = this.fetchYouTube(searchRequest);
  }

  public filteringByKeyWords(filteringRequest: string): void {
    this.filteringRequest = filteringRequest;
  }

  public sortingByViews(sortingOder: boolean): void {
    this.searchResult = sortingBy(this.searchResult, getViewCountNumber, sortingOder);
  }

  public sortingByDate(sortingOder: boolean): void {
    this.searchResult = sortingBy(this.searchResult, getDateNumber, sortingOder);
  }
}
