import { Component, Input } from '@angular/core';
import { ResponseList } from '../../models/response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {
  @Input() public searchResult : ResponseList;
  @Input() public filteringRequest : string;

  constructor() { }
}
