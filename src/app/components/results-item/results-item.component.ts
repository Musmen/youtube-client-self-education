import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResponseItem } from '../../models/response.model';
import { SearchResultCard } from '../../models/searchResultCard.model';

const STATISTIC_ITEMS_LABELS : string[] = ['views', 'likes', 'dislikes', 'comments'];
enum LabelsIcons {
  views = 'visibility',
  likes = 'favorite',
  dislikes = 'thumb_down',
  comments = 'chat',
}


@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss']
})
export class ResultsItemComponent implements OnInit, OnChanges {
  searchResultCard: SearchResultCard = {
    posterUrl: '',
    views: 0,
    likes: 0,
    dislikes: 0,
    comments: 0,
    title: '',
    date: '',
  };

  STATISTIC_ITEMS_LABELS : string[] = STATISTIC_ITEMS_LABELS;
  LabelsIcons = LabelsIcons;

  @Input() searchResultItem : ResponseItem;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let currentSearchResultItem = changes.searchResultItem.currentValue;
    this.searchResultCard.posterUrl = currentSearchResultItem.snippet.thumbnails.medium.url;
    this.searchResultCard.views = currentSearchResultItem.statistics.viewCount;
    this.searchResultCard.likes = currentSearchResultItem.statistics.likeCount;
    this.searchResultCard.dislikes = currentSearchResultItem.statistics.dislikeCount;
    this.searchResultCard.comments = currentSearchResultItem.statistics.commentCount;
    this.searchResultCard.title = currentSearchResultItem.snippet.title;
    this.searchResultCard.date = currentSearchResultItem.snippet.publishedAt;
  }
}
