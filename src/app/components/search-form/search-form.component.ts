import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() public searchRequest: string = '';
  @Output() public searchRequestEnterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public searchFormSubmit(): void {
    this.searchRequestEnterEvent.emit(this.searchRequest);
  }
}
