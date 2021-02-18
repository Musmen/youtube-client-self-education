import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.scss']
})
export class ResultsCardComponent {
  @Input() public searchResultCard: SearchResultCard;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public goToDetailedInfoPage(): void {
    this.router.navigate(['info', this.searchResultCard.id], { relativeTo: this.route });
  }
}
