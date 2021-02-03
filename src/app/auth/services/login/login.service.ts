import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Credentials } from '@auth/models/credentials.model';
import { LOCAL_STORAGE_TOKEN_KEY, EMPTY_CREDENTIALS } from '@common/constants';

let HEX_BASE: number;
HEX_BASE = 16;

@Injectable()
export class LoginService {
  public credentials: Credentials = EMPTY_CREDENTIALS;
  public isUserLogged: boolean = false;

  constructor(private router: Router) { }

  private toggleUserLoggedState(): void {
    this.isUserLogged = !this.isUserLogged;
  }

  private encryptToken(credentials: Credentials): string {
    return `${credentials.login}${(credentials.password.length * Math.random()).toString(HEX_BASE)}`;
  }

  public logIn(credentials: Credentials): void {
    if (this.isUserLogged) { this.logOut(); }

    const token: string = this.encryptToken(credentials);
    this.credentials = {login: credentials.login, password: credentials.password, token};
    this.toggleUserLoggedState();

    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(this.credentials));
    this.router.navigate(['home']);
  }

  public logOut(): void {
    if (!this.isUserLogged) { return; }

    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    this.credentials = null;
    this.toggleUserLoggedState();
    this.router.navigate(['login']);
  }

  public getLoginCredentialsFromLS(): void {
    this.credentials = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
    if (!this.credentials) {
      this.router.navigate(['login']);
      return;
    }

    this.isUserLogged = true;
  }
}
