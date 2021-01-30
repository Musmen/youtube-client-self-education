import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { YouTubeService } from '@youtube/services/youtube/youtube.service';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss']
})
export class DetailedInfoPageComponent implements OnInit {
  @Input() public infoCard: SearchResultCard = null;

  constructor(
    private youTubeService: YouTubeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.infoCard = this.youTubeService.searchResultsCards
      .find((card) => card.id === this.route.snapshot.params.id);
  }

  public goBack(): void {
    this.router.navigate(['..']);
  }
}
