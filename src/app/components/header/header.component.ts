import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isSortingPanelOpen: boolean = false;
  @Input() searchRequest: string = '';
  @Output() startSearchEvent = new EventEmitter<string>();

  constructor() { }

  toggleSortingPanel(sortingPanelState : boolean) : void {
    this.isSortingPanelOpen = sortingPanelState;
  }

  setSearchRequest(searchRequest : string) : void {
    this.searchRequest = searchRequest;
    this.startSearchEvent.emit(this.searchRequest);
  }

  ngOnInit(): void {
  }

}
