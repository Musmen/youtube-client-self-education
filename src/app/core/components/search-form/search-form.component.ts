import { Component, Input } from '@angular/core';
import { YouTubeService } from '@youtube/services/youtube/youtube.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() public searchRequest: string = '';

  constructor(private youTubeService: YouTubeService) { }

  public searchFormSubmit(): void {
    this.youTubeService.getSearchResults(this.searchRequest);
  }
}
