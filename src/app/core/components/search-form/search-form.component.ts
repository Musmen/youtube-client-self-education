import { Component, Input } from '@angular/core';
import { SearchService } from '@youtube/services/search/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() public searchRequest: string = '';

  constructor(private searchService: SearchService) { }

  public searchFormSubmit(): void {
    this.searchService.getSearchResults(this.searchRequest);
  }
}
