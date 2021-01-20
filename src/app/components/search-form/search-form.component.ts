import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input() searchRequest: string = '';
  @Output() searchRequestEnterEvent = new EventEmitter<string>();

  constructor() { }

  searchFormSubmit(): void {
    this.searchRequestEnterEvent.emit(this.searchRequest);
  }
}
