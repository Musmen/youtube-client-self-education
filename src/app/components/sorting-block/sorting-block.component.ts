import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {

  @Input() isSortingPanelOpen: boolean = false;
  @Input() sortingRequest: string = '';

  @Output() sortingByKeyWordsEvent = new EventEmitter<string>();
  @Output() sortingByViewsEvent = new EventEmitter<boolean>();
  @Output() sortingByDateEvent = new EventEmitter<boolean>();

  constructor() { }

  sortingFormSubmit(): void {
    if (this.sortingRequest) this.sortingByKeyWordsEvent.emit(this.sortingRequest);
  }

  sortByViews(sortingOrder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOrder);
  }

  sortByDate(sortingOrder: boolean): void {
    this.sortingByDateEvent.emit(sortingOrder);
  }
}
