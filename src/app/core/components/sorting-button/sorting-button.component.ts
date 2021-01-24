import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.scss']
})
export class SortingButtonComponent {
  private sortingPanelState: boolean = false;

  @Output() public sortingPanelToggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  public toggleSortingPanel(): void {
    this.sortingPanelState = !this.sortingPanelState;
    this.sortingPanelToggleEvent.emit(this.sortingPanelState);
  }
}
