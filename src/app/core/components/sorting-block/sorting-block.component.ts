import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {
  @Input() public isSortingPanelOpen: boolean = false;
  @Input() public filteringRequest: string = '';

  @Output() public filteringByKeyWordsEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output() public sortingByViewsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public sortingByDateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public changeFilteringRequest(): void {
    this.filteringByKeyWordsEvent.emit(this.filteringRequest);
  }

  public sortByViews(sortingOrder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOrder);
  }

  public sortByDate(sortingOrder: boolean): void {
    this.sortingByDateEvent.emit(sortingOrder);
  }
}
