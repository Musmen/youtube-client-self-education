import { Component } from '@angular/core';
import { LoginService } from '@auth/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public get loggedUserLogin(): string {
    return this.loginService.loggedUserLogin;
  }

  public get isUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  public get isCredentialsValid(): boolean {
    return this.loginService.isCredentialsValid;
  }

  constructor(private loginService: LoginService) { }

  public logOut(): void {
    this.loginService.logOut();
  }

  public logIn(): void {
    this.loginService.logIn();
  }
}
