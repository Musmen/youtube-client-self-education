import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ResponseList, ResponseItem } from '../../models/response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit, OnChanges {
  @Input() searchResult : ResponseList;
  searchResultItems : ResponseItem[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchResult.currentValue) this.searchResultItems = changes.searchResult.currentValue.items;
  }
}
