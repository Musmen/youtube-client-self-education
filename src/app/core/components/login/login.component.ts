import { Component } from '@angular/core';
import { LoginService } from '@auth/services/login/login.service';
import { DEFAULT_USER_NAME } from '@common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName: string = DEFAULT_USER_NAME;

  public get isUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  constructor(private loginService: LoginService) { }

  public logOut(): void {
    this.loginService.logOut();
  }
}
