import { Component, Input, OnInit } from '@angular/core';
import { YouTubeService } from '@youtube/services/youtube/youtube.service';
import { SearchResultCard } from '@youtube/models/searchResultCard.model';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss']
})
export class DetailedInfoPageComponent implements OnInit {
  @Input() public infoCard: SearchResultCard = null;

  constructor(private youTubeService: YouTubeService) { }

  public ngOnInit(): void { // !!! todo
    this.youTubeService.getSearchResults('some request');

    const length: number = this.youTubeService.searchResultsCards.length;
    const randomCardIndex: number = Math.ceil((length - 1) * Math.random());
    console.log(randomCardIndex);
    this.infoCard = this.youTubeService.searchResultsCards[randomCardIndex];
  }
}
