import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ResponseList, ResponseItem } from '../../models/response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() searchResult : ResponseList;
  searchItems : ResponseItem[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchResult.currentValue) this.searchItems = changes.searchResult.currentValue.items;
  }
}
