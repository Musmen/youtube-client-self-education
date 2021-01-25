import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sortingByViewsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public sortingByDateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public sortingByViews(sortingOder: boolean): void {
    this.sortingByViewsEvent.emit(sortingOder);
  }

  public sortingByDate(sortingOder: boolean): void {
    this.sortingByDateEvent.emit(sortingOder);
  }
}
