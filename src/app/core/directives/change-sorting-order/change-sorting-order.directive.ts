import { Directive, HostListener, Output, EventEmitter, HostBinding} from '@angular/core';

@Directive({
  selector: '[appChangeSortingOrder]'
})
export class ChangeSortingOrderDirective {
  private sortingDirection: boolean = false;

  @Output() public changeSortingDirectionEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('click') public onMouseClick(): void {
    this.sortingDirection = !this.sortingDirection;
    this.changeSortingDirectionEvent.emit(this.sortingDirection);
  }

  @HostBinding('class.increasing')
  get getSortingDirection(): boolean {
    return this.sortingDirection;
  }
}
