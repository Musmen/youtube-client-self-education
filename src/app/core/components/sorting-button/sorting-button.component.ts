import { Component } from '@angular/core';
import { StateService } from '@core/services/state/state.service';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.scss']
})
export class SortingButtonComponent {
  constructor(private stateService: StateService) { }

  public toggleSortingPanel(): void {
    this.stateService.isSortingPanelOpen = !this.stateService.isSortingPanelOpen;
  }
}
