import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() searchRequest : string = '';
  @Output() searchRequestEnterEvent = new EventEmitter<string>();

  constructor() { }

  searchFormSubmit() : void {
    if (this.searchRequest) this.searchRequestEnterEvent.emit(this.searchRequest);
  }

  ngOnInit(): void {
  }

}
