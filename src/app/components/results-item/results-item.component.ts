import { Component, Input, OnInit } from '@angular/core';
import { ResponseItem } from '../../models/response.model';
import { SearchResultCard } from '../../models/searchResultCard.model';

const STATISTIC_ITEMS_LABELS : string[] = ['views', 'likes', 'dislikes', 'comments'];

enum LABELS_ICONS {
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
export class ResultsItemComponent implements OnInit {
  public searchResultCard: SearchResultCard = {
    posterUrl: '',
    views: 0,
    likes: 0,
    dislikes: 0,
    comments: 0,
    title: '',
    date: '',
  };

  public STATISTIC_ITEMS_LABELS : string[] = STATISTIC_ITEMS_LABELS;
  public LABELS_ICONS = LABELS_ICONS;

  @Input() private searchResultItem : ResponseItem;

  constructor() { }

  public ngOnInit(): void {
    const snippet = this.searchResultItem.snippet;
    const statistics = this.searchResultItem.statistics;

    this.searchResultCard.posterUrl = snippet.thumbnails.medium.url;
    this.searchResultCard.views = statistics.viewCount;
    this.searchResultCard.likes = statistics.likeCount;
    this.searchResultCard.dislikes = statistics.dislikeCount;
    this.searchResultCard.comments = statistics.commentCount;
    this.searchResultCard.title = snippet.title;
    this.searchResultCard.date = snippet.publishedAt;
  }
}
