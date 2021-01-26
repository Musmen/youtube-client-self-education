import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from '@core/services/state/state.service';

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

  @Output() public sortingByViewsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public sortingByDateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private stateService: StateService) { }

  public sortByViews(sortingOrder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOrder);
  }

  public sortByDate(sortingOrder: boolean): void {
    this.sortingByDateEvent.emit(sortingOrder);
  }
}
