import { Component, OnInit } from '@angular/core';
import { ResultsList } from './results-list.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  resultsList : ResultsList;

  constructor() { }

  ngOnInit(): void {
  }
}
