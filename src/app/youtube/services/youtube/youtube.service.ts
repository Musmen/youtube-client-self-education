import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { ResponseList, ResponseItem } from '@youtube/models/response.model';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { BASE_URL, HTTP_GET_CONFIG } from './common/youtube.http.config';
import { ERROR_MESSAGES, SEARCH_REQUEST_MIN_LENGTH } from '@common/constants';

@Injectable()
export class YouTubeService implements OnDestroy {
  private subscriptions: Subscription[];

  public searchResultsCards$: BehaviorSubject<SearchResultCard[]>;

  public isLoading: boolean = false;
  public searchError: boolean = false;
  public searchErrorMessage: string = ERROR_MESSAGES.SEARCH_REQUEST;

  constructor(private http: HttpClient) {
    this.subscriptions = [];
    this.searchResultsCards$ = new BehaviorSubject<SearchResultCard[]>(null);
  }

  private checkSearchRequest(searchRequest: string): boolean {
    this.searchError = !Boolean(searchRequest)
      || Boolean(searchRequest.length < SEARCH_REQUEST_MIN_LENGTH);
    if (this.searchError) { this.searchErrorMessage = ERROR_MESSAGES.SEARCH_REQUEST; }
    return !this.searchError;
  }

  private fetchSearchResults(searchRequest: string): Observable<Object> {
    return this.http.get(`${BASE_URL}${HTTP_GET_CONFIG.SEARCH.URL}`, {
      params: {
        ...HTTP_GET_CONFIG.SEARCH.PARAMS,
        q: searchRequest,
      }
    });
  }

  private fetchVideoIdListWithStatistics(videoIdList: string[]): Observable<Object> {
    return this.http.get(`${BASE_URL}${HTTP_GET_CONFIG.VIDEOS.URL}`, {
      params: {
        ...HTTP_GET_CONFIG.VIDEOS.PARAMS,
        id: videoIdList,
      },
    });
  }

  private getVideoIdListFromResponce(responce: ResponseList): string[] {
    return responce.items.map((responseItem: ResponseItem) => responseItem.id.videoId);
  }

  private fetchSearchResultsWithStatistics(searchRequest: string): void {
    this.isLoading = true;

    const subscription: Subscription = this.fetchSearchResults(searchRequest)
      .pipe(
        switchMap((responce: ResponseList) => {
          const videoIdList: string[] = this.getVideoIdListFromResponce(responce);
          return this.fetchVideoIdListWithStatistics(videoIdList);
        }),
        take(1),
        catchError(error => throwError(error))
      )
      .subscribe(
        (searchResults: ResponseList) => {
          this.searchResultsCards$.next(this.parseSearchResults(searchResults));
        },
        () => {
          this.searchResultsCards$.next(null);
          this.searchError = true;
          this.searchErrorMessage = `${ERROR_MESSAGES.SEARCH_RESPONCE}${searchRequest}`;
        },
        () => this.isLoading = false
      );

    this.subscriptions.push(subscription);
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
      this.fetchSearchResultsWithStatistics(searchRequest);
    }
  }

  public getSearchResultCardById(id: string): SearchResultCard {
    const cards: SearchResultCard[] = this.searchResultsCards$.getValue();
    return cards
      ? cards.find((card) => card.id === id)
      : null;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe()
    );
  }
}
