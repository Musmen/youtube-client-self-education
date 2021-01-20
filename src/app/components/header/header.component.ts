import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isSortingPanelOpen: boolean = false;
  @Input() searchRequest: string = '';
  @Input() filteringRequest: string = '';

  @Output() startSearchEvent = new EventEmitter<string>();

  @Output() filteringByKeyWordsEvent = new EventEmitter<string>();

  @Output() sortingByViewsEvent = new EventEmitter<boolean>();
  @Output() sortingByDateEvent = new EventEmitter<boolean>();

  constructor() { }

  toggleSortingPanel(sortingPanelState: boolean): void {
    this.isSortingPanelOpen = sortingPanelState;
  }

  setSearchRequest(searchRequest: string): void {
    this.searchRequest = searchRequest;
    this.startSearchEvent.emit(this.searchRequest);
  }

  filteringByKeyWords(filteringRequest: string): void {
    this.filteringRequest = filteringRequest;
    this.filteringByKeyWordsEvent.emit(this.filteringRequest);
  }

  sortingByViews(sortingOder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOder);
  }

  sortingByDate(sortingOder: boolean): void {
    this.sortingByDateEvent.emit(sortingOder);
  }
}
