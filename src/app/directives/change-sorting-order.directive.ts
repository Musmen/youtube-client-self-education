import { Directive, HostListener, Output, EventEmitter, HostBinding} from '@angular/core';

@Directive({
  selector: '[appChangeSortingOrder]'
})
export class ChangeSortingOrderDirective {

  sortingDirection: boolean = false;

  constructor() { }

  @Output() changeSortingDirectionEvent = new EventEmitter<boolean>();

  @HostListener('click') onMouseClick(): void {
    this.sortingDirection = !this.sortingDirection;
    this.changeSortingDirectionEvent.emit(this.sortingDirection);
  }

  @HostBinding('class.increasing')
  get getSortingOrderClass() {
    return this.sortingDirection;
  }
}
