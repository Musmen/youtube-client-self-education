import { Component, Input } from '@angular/core';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { LABELS_ICONS, STATISTIC_ITEMS_LABELS } from '@common/constants';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.scss']
})
export class ResultsCardComponent {
  @Input() public searchResultCard: SearchResultCard;

  public LABELS_ICONS: {} = LABELS_ICONS;
  public STATISTIC_ITEMS_LABELS: string[] = STATISTIC_ITEMS_LABELS;

  constructor() { }
}
