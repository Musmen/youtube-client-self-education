import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isSortingPanelOpen: boolean = false;
  @Input() searchRequest: string = '';
  @Input() sortingRequest: string = '';
  @Output() startSearchEvent = new EventEmitter<string>();
  @Output() startSortEvent = new EventEmitter<string>();

  constructor() { }

  toggleSortingPanel(sortingPanelState : boolean) : void {
    this.isSortingPanelOpen = sortingPanelState;
  }

  setSearchRequest(searchRequest : string) : void {
    this.searchRequest = searchRequest;
    this.startSearchEvent.emit(this.searchRequest);
  }

  setSortingRequest(sortingRequest : string) : void {
    this.sortingRequest = sortingRequest;
    this.startSortEvent.emit(this.sortingRequest);
  }
}
