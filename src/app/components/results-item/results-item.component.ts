import { Component, OnInit } from '@angular/core';
import { ResponseItem } from '../../models/response.model';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss']
})
export class ResultsItemComponent implements OnInit {
  resultsItem: ResponseItem;

  constructor() { }

  ngOnInit(): void {
  }
}
