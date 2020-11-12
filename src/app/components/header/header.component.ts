import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isSortingPanelOpen: boolean = false;

  toggleSortingPanel(sortingPanelState : boolean) : void {
    this.isSortingPanelOpen = sortingPanelState;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
