import { Component } from '@angular/core';
import { LOGO_DEFAULT_TITLE } from '@common/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  public title: string = LOGO_DEFAULT_TITLE;

  constructor() { }
}
