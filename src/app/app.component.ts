import { Component } from '@angular/core';
import { ResponseList } from '../app/models/response.model';
import { YOU_TUBE_RESPONSE } from '../mock-data/mock-search-results';

import { ERROR_MESSAGES } from './common/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchRequest : string;
  sortRequest : string;

  searchResult : ResponseList;

  searchRequestError : boolean = false;

  ERROR_MESSAGES = ERROR_MESSAGES;

  constructor() { }

  startSearch(searchRequest : string) : void {
    this.searchRequest = searchRequest;

    if (!Boolean(searchRequest)) {
      this.searchRequestError = true;
      return;
    }
    this.searchRequestError = false;

    this.searchResult = this.fetchYouTube(searchRequest);
  }

  startSort(sortRequest : string) : void {
    this.sortRequest = sortRequest;
    // this.searchResult = this.fetchYouTube(searchRequest); // !!! todo тут и нужно реализовать алгоритм для сортировки, может направление для пайпа и т.д.
  }

  fetchYouTube(searchRequest : string) : ResponseList {
    if (searchRequest) return YOU_TUBE_RESPONSE;
  }
}
