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

  public sortingBy: string = null;

  constructor(private stateService: StateService) { }

  public setSortByViewsCount(sortingBy: string): void {
    this.sortingBy = sortingBy;

    this.stateService.setSortingSettings({
      method: getViewsCountNumber,
      isSortingByIncrease: this.isSortingByViewsCountByIncrease,
    });
    this.isSortingByViewsCountByIncrease = !this.isSortingByViewsCountByIncrease;
  }

  public setSortByDate(sortingBy: string): void {
    this.sortingBy = sortingBy;

    this.stateService.setSortingSettings({
      method: getDateNumber,
      isSortingByIncrease: this.isSortingByDateByIncrease,
    });
    this.isSortingByDateByIncrease = !this.isSortingByDateByIncrease;
  }
}
