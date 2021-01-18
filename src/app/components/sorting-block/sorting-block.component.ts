import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent {

  @Input() isSortingPanelOpen: boolean = false;
  @Input() sortingRequest: string = '';
  @Output() sortingRequestEnterEvent = new EventEmitter<string>();

  constructor() { }

  sortingFormSubmit() : void {
    if (this.sortingRequest) this.sortingRequestEnterEvent.emit(this.sortingRequest);
  }
}
