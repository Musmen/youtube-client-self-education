import { Component, Input } from '@angular/core';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';
import { LABELS_ICONS, STATISTIC_ITEMS_LABELS } from '@common/constants';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() public card: SearchResultCard;

  public LABELS_ICONS: {} = LABELS_ICONS;
  public STATISTIC_ITEMS_LABELS: string[] = STATISTIC_ITEMS_LABELS;

  constructor() { }
}
