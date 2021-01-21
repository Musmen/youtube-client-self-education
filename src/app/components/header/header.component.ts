import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public isSortingPanelOpen: boolean = false;

  @Output() public startSearchEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output() public filteringByKeyWordsEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output() public sortingByViewsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public sortingByDateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public toggleSortingPanel(sortingPanelState: boolean): void {
    this.isSortingPanelOpen = sortingPanelState;
  }

  public setSearchRequest(searchRequest: string): void {
    this.startSearchEvent.emit(searchRequest);
  }

  public filteringByKeyWords(filteringRequest: string): void {
    this.filteringByKeyWordsEvent.emit(filteringRequest);
  }

  public sortingByViews(sortingOder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOder);
  }

  public sortingByDate(sortingOder: boolean): void {
    this.sortingByDateEvent.emit(sortingOder);
  }
}
