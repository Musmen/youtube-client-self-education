import { Component, OnInit } from '@angular/core';
import { ResponseList } from '../../models/response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  resultsList : ResponseList;

  constructor() { }

  ngOnInit(): void {
  }
}
