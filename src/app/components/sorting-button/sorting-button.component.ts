import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.scss']
})
export class SortingButtonComponent implements OnInit {

  @Output() sortingPanelToggleEvent = new EventEmitter<boolean>(false);
  sortingPanelState : boolean = false;

  constructor() { }

  toggleSortingPanel() : void {
    this.sortingPanelState = !this.sortingPanelState;
    this.sortingPanelToggleEvent.emit(this.sortingPanelState);
  }

  ngOnInit(): void {
  }

}
