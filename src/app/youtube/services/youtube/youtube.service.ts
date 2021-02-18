import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';

import { ResponseList, ResponseItem } from '@youtube/models/response.model';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { BASE_URL, HTTP_GET_CONFIG } from './common/youtube.http.config';
import { ERROR_MESSAGES, SEARCH_REQUEST_MIN_LENGTH } from '@common/constants';

@Injectable()
export class YouTubeService implements OnDestroy {
  private subscriptions: Subscription[];

  public searchResultsCards$: BehaviorSubject<SearchResultCard[]>;

  public searchError: boolean = false;
  public searchErrorMessage: string = ERROR_MESSAGES.SEARCH_REQUEST;

  constructor(private http: HttpClient) {
    this.subscriptions = [];
    this.fetchSearchResultsWithStatistics = this.fetchSearchResultsWithStatistics.bind(this);

    this.searchResultsCards$ = new BehaviorSubject<SearchResultCard[]>(null);
  }

  private checkSearchRequest(searchRequest: string): boolean {
    this.searchError = !Boolean(searchRequest)
      || Boolean(searchRequest.length < SEARCH_REQUEST_MIN_LENGTH);
    return !this.searchError;
  }

  private fetchSearchResults(searchRequest: string): void {
    const subscription: Subscription = this.http.get(`${BASE_URL}${HTTP_GET_CONFIG.SEARCH.URL}`, {
      params: {
        ...HTTP_GET_CONFIG.SEARCH.PARAMS,
        q: searchRequest,
      }
    }).subscribe(this.fetchSearchResultsWithStatistics);

    this.subscriptions.push(subscription);
  }

  private fetchSearchResultsWithStatistics(responce: ResponseList): void {
    const subscription: Subscription = this.http.get(`${BASE_URL}${HTTP_GET_CONFIG.VIDEOS.URL}`, {
      params: {
        ...HTTP_GET_CONFIG.VIDEOS.PARAMS,
        id: this.getVideoIdListFromResponce(responce),
      },
    })
    .subscribe((searchResults: ResponseList) => {
      this.searchResultsCards$.next(this.parseSearchResults(searchResults));
    });

    this.subscriptions.push(subscription);
  }

  private getVideoIdListFromResponce(responce: ResponseList): string[] {
    return responce.items.map((responseItem: ResponseItem) => responseItem.id.videoId);
  }

  private parseSearchResults(searchResults: ResponseList): SearchResultCard[] {
    return searchResults.items.map((searchResultItem: ResponseItem) => {
      return {
        id: searchResultItem.id,
        posterUrl: searchResultItem.snippet.thumbnails.medium.url,
        views: searchResultItem.statistics.viewCount,
        likes: searchResultItem.statistics.likeCount,
        dislikes: searchResultItem.statistics.dislikeCount,
        comments: searchResultItem.statistics.commentCount,
        title: searchResultItem.snippet.localized.title
          || searchResultItem.snippet.title,
        description: searchResultItem.snippet.localized.description
          || searchResultItem.snippet.description,
        date: searchResultItem.snippet.publishedAt,
      };
    });
  }

  public getSearchResults(searchRequest: string): void {
    if (this.checkSearchRequest(searchRequest)) {
      this.fetchSearchResults(searchRequest);
    }
  }

  public getSearchResultCardById(id: string): SearchResultCard {
    const cards: SearchResultCard[] = this.searchResultsCards$.getValue();
    return cards
      ? cards.find((card) => card.id === id)
      : null;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
