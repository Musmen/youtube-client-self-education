import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public login: string = '';
  public password: string = '';

  constructor() { }

  public loginFormSubmit(): void {

  }
}
