import { Component } from '@angular/core';
import { DEFAULT_USER_NAME } from '@common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName: string = DEFAULT_USER_NAME;

  constructor() { }
}
