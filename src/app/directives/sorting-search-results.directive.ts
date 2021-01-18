import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSortingSearchResults]'
})
export class SortingSearchResultsDirective {

  sortingDirection: boolean = false;

  constructor() { }

  @Input('appSortingSearchResults') sortingBase : string = '';

  @HostListener('click') onMouseClick() {
    this.sortingDirection = !this.sortingDirection;
    console.log(this.sortingDirection, this.sortingBase);
  }
}
