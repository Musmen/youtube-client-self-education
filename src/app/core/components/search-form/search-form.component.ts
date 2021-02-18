import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { YouTubeService } from '@youtube/services/youtube/youtube.service';
import { HALF_SECOND } from '@common/constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public searchRequest: FormControl;

  constructor(private youTubeService: YouTubeService) { }

  public ngOnInit(): void {
    this.searchRequest = new FormControl('');

    const subscription: Subscription = this.searchRequest.valueChanges.pipe(
      debounceTime(HALF_SECOND),
      distinctUntilChanged(),
    ).subscribe(
      (searchRequest) => this.youTubeService.getSearchResults(searchRequest)
    );
    this.subscriptions = [subscription];
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe()
    );
  }
}
