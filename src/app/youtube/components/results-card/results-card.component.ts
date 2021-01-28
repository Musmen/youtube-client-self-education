import { Component, Input } from '@angular/core';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.scss']
})
export class ResultsCardComponent {
  @Input() public searchResultCard: SearchResultCard;

  constructor() { }
}
