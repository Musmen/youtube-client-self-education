import { Component } from '@angular/core';

import { ResponseList } from '../app/models/response.model';

import { YOU_TUBE_RESPONSE } from '../mock-data/mock-search-results';

import { ERROR_MESSAGES, getViewCountNumber, getDateNumber, sortingBy } from './common/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchRequest : string;
  filteringRequest : string;

  searchResult : ResponseList;

  searchRequestError : boolean = false;

  ERROR_MESSAGES = ERROR_MESSAGES;

  constructor() { }

  fetchYouTube(searchRequest : string) : ResponseList {
    if (searchRequest) return YOU_TUBE_RESPONSE;
  }

  startSearch(searchRequest : string) : void {
    this.searchRequest = searchRequest;

    if (!Boolean(searchRequest)) {
      this.searchRequestError = true;
      return;
    }
    this.searchRequestError = false;

    this.searchResult = this.fetchYouTube(searchRequest);
  }

  filteringByKeyWords(filteringRequest : string) : void {
    this.filteringRequest = filteringRequest;
  }

  sortingByViews(sortingOder: boolean): void {
    this.searchResult = sortingBy<ResponseList>(this.searchResult, getViewCountNumber, sortingOder)
  }

  sortingByDate(sortingOder: boolean): void {
    this.searchResult = sortingBy<ResponseList>(this.searchResult, getDateNumber, sortingOder)
  }
}
