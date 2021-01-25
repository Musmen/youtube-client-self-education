import { Component, Input, OnInit } from '@angular/core';
import { ResponseItem } from '../../models/response.model';
import { SearchResultCard } from '../../models/searchResultCard.model';

import { LABELS_ICONS, STATISTIC_ITEMS_LABELS } from '../../../common/constants';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss']
})
export class ResultsItemComponent implements OnInit {
  @Input() private searchResultItem: ResponseItem;

  public searchResultCard: SearchResultCard = {
    posterUrl: '',
    views: 0,
    likes: 0,
    dislikes: 0,
    comments: 0,
    title: '',
    date: '',
  };

  public LABELS_ICONS: {} = LABELS_ICONS;
  public STATISTIC_ITEMS_LABELS: string[] = STATISTIC_ITEMS_LABELS;

  constructor() { }

  public ngOnInit(): void {
    this.searchResultCard.posterUrl = this.searchResultItem.snippet.thumbnails.medium.url;
    this.searchResultCard.views = this.searchResultItem.statistics.viewCount;
    this.searchResultCard.likes = this.searchResultItem.statistics.likeCount;
    this.searchResultCard.dislikes = this.searchResultItem.statistics.dislikeCount;
    this.searchResultCard.comments = this.searchResultItem.statistics.commentCount;
    this.searchResultCard.title = this.searchResultItem.snippet.title;
    this.searchResultCard.date = this.searchResultItem.snippet.publishedAt;
  }
}
