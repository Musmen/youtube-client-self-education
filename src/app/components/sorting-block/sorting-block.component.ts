import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {
  @Input() isSortingPanelOpen: boolean = false;
  @Input() filteringRequest: string = '';

  @Output() filteringByKeyWordsEvent = new EventEmitter<string>();

  @Output() sortingByViewsEvent = new EventEmitter<boolean>();
  @Output() sortingByDateEvent = new EventEmitter<boolean>();

  constructor() { }

  filteringFormSubmit(): void {
    this.filteringByKeyWordsEvent.emit(this.filteringRequest);
  }

  sortByViews(sortingOrder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOrder);
  }

  sortByDate(sortingOrder: boolean): void {
    this.sortingByDateEvent.emit(sortingOrder);
  }
}
