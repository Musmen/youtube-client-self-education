import { Injectable } from '@angular/core';

import { YOU_TUBE_RESPONSE } from './mock-response/mock-response';
import { ResponseList, ResponseItem } from '@youtube/models/response.model';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';

import { ERROR_MESSAGES } from '@common/constants';

@Injectable()
export class YouTubeService {
  private searchResults: ResponseList = null;
  public searchResultsCards: SearchResultCard[] = null;

  public searchError: boolean = false;
  public searchErrorMessage: string = ERROR_MESSAGES.SEARCH_REQUEST;

  constructor() { }

  private checkSearchRequest(searchRequest: string): boolean {
    this.searchError = !Boolean(searchRequest);
    return !this.searchError;
  }

  private fetchSearchResults(): ResponseList  {
    return YOU_TUBE_RESPONSE;
  }

  private parseSearchResults(searchResults: ResponseList): SearchResultCard[] {
    return searchResults.items.map((searchResultItem: ResponseItem) => {
      return {
        posterUrl: searchResultItem.snippet.thumbnails.medium.url,
        views: searchResultItem.statistics.viewCount,
        likes: searchResultItem.statistics.likeCount,
        dislikes: searchResultItem.statistics.dislikeCount,
        comments: searchResultItem.statistics.commentCount,
        title: searchResultItem.snippet.title,
        date: searchResultItem.snippet.publishedAt,
      };
    });
  }

  public getSearchResults(searchRequest: string): void {
    if (this.checkSearchRequest(searchRequest)) {
      this.searchResults = this.fetchSearchResults();
      this.searchResultsCards = this.parseSearchResults(this.searchResults);
    }
  }
}
