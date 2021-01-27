import { Component } from '@angular/core';
import { ERROR_MESSAGES } from '@common/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public mainDescription: string = ERROR_MESSAGES.NOT_FOUND_PAGE;

  constructor() { }
}
