import { Component } from '@angular/core';
import { LoginService } from '@auth/services/login/login.service';
import { DEFAULT_USER_LOGIN, USER_LOGIN_MAX_LENGTH } from '@common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public get isUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  public get userLogin(): string {
    return (this.loginService.credentials && this.loginService.credentials.login.slice(0, USER_LOGIN_MAX_LENGTH))
      || DEFAULT_USER_LOGIN;
  }

  constructor(private loginService: LoginService) { }

  public logOut(): void {
    this.loginService.logOut();
  }
}
