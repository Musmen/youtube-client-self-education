import { Component } from '@angular/core';
import { ResponseList } from '../app/models/response.model';
import { YOU_TUBE_RESPONSE } from '../mock-data/mock-search-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchRequest : string;
  searchResult : ResponseList;

  constructor() { }

  startSearch(searchRequest : string) : void {
    this.searchRequest = searchRequest;
    this.searchResult = this.fetchYouTube(searchRequest);
  }

  fetchYouTube(searchRequest : string) : ResponseList {
    if (searchRequest) return YOU_TUBE_RESPONSE;
  }
}
