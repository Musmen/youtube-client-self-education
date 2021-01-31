import { Component, OnInit } from '@angular/core';

import { Credentials } from '@auth/models/credentials.model';
import { LoginService } from '@auth/services/login/login.service';
import { EMPTY_CREDENTIALS } from '@common/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public credentials: Credentials;

  constructor(private loginService: LoginService) { }

  private checkUsersCredentials(credentials: Credentials = this.credentials): boolean {
    return Boolean(credentials.login && credentials.password);
  }

  public loginFormSubmit(): void {
    if (!this.checkUsersCredentials()) { return; }

    this.loginService.logIn(this.credentials);
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public ngOnInit(): void {
    this.credentials = this.loginService.credentials || EMPTY_CREDENTIALS;
  }
}
