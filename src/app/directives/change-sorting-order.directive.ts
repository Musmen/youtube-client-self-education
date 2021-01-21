import { Directive, HostListener, Output, EventEmitter, HostBinding} from '@angular/core';

@Directive({
  selector: '[appChangeSortingOrder]'
})
export class ChangeSortingOrderDirective {
  @Output() changeSortingDirectionEvent = new EventEmitter<boolean>();

  private sortingDirection: boolean = false;

  constructor() { }

  @HostListener('click') onMouseClick(): void {
    this.sortingDirection = !this.sortingDirection;
    this.changeSortingDirectionEvent.emit(this.sortingDirection);
  }

  @HostBinding('class.increasing')
  get getSortingDirection(): boolean {
    return this.sortingDirection;
  }
}
