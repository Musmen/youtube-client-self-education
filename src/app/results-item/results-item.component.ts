import { Component, OnInit } from '@angular/core';
import { ResultsItem } from './results-item.model';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss']
})
export class ResultsItemComponent implements OnInit {
  resultsItem: ResultsItem;

  constructor() { }

  ngOnInit(): void {
  }
}
