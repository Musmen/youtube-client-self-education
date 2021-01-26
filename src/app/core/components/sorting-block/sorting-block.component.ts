import { Component, Input } from '@angular/core';
import { StateService } from '@core/services/state/state.service';
import { getViewsCountNumber, getDateNumber } from '@common/helper';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {
  @Input()
  public set isSortingPanelOpen(isSortingPanelOpen: boolean) {
    this.stateService.isSortingPanelOpen = isSortingPanelOpen;
  }
  public get isSortingPanelOpen(): boolean {
    return this.stateService.isSortingPanelOpen;
  }

  @Input()
  public set filteringRequest(filteringRequest: string) {
    this.stateService.filteringRequest = filteringRequest;
  }
  public get filteringRequest(): string {
    return this.stateService.filteringRequest;
  }

  public isSortingByViewsCountByIncrease: boolean = false;
  public isSortingByDateByIncrease: boolean = false;

  constructor(private stateService: StateService) { }

  public setSortByViewsCount(): void {
    this.isSortingByViewsCountByIncrease = !this.isSortingByViewsCountByIncrease;

    this.stateService.setSortingSettings({
      method: getViewsCountNumber,
      isSortingByIncrease: this.isSortingByViewsCountByIncrease,
    });
  }

  public setSortByDate(): void {
    this.isSortingByDateByIncrease = !this.isSortingByDateByIncrease;
    this.stateService.setSortingSettings({
      method: getDateNumber,
      isSortingByIncrease: this.isSortingByDateByIncrease,
    });

    // this.stateService.sortingSettings.method = getDateNumber;
    // this.stateService.sortingSettings.isSortingByIncrease = this.isSortingByDateByIncrease;
  }
}
