import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Credentials } from '@auth/models/credentials.model';
import { LOCAL_STORAGE_TOKEN_KEY, EMPTY_CREDENTIALS, DEFAULT_USER_LOGIN } from '@common/constants';

let HEX_BASE: number;
HEX_BASE = 16;

@Injectable()
export class LoginService {
  public loggedUserLogin: string;
  public credentials$: BehaviorSubject<Credentials>;
  public isCredentialsValid$: BehaviorSubject<boolean>;
  public isUserLogged$: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.loggedUserLogin = '';

    this.credentials$ = new BehaviorSubject<Credentials>(EMPTY_CREDENTIALS);
    this.isCredentialsValid$ = new BehaviorSubject<boolean>(false);
    this.isUserLogged$ = new BehaviorSubject<boolean>(false);

    this.checkIsCredentialsValid = this.checkIsCredentialsValid.bind(this);
    this.credentials$.subscribe(this.checkIsCredentialsValid);
  }

  private checkIsCredentialsValid(credentials: Credentials): void {
    this.isCredentialsValid$.next(
      credentials
        ? Boolean(credentials.login && credentials.password)
        : false
    );
  }

  private toggleUserLoggedState(): void {
    this.isUserLogged$.next(!this.isUserLogged$.getValue());
  }

  private encryptToken(credentials: Credentials): string {
    return `${credentials.login}${(credentials.password.length * Math.random()).toString(HEX_BASE)}`;
  }

  private goToLoginPage(): void {
    this.router.navigate(['login']);
  }

  private goToMainPage(): void {
    this.router.navigate(['home']);
  }

  public logIn(credentials: Credentials = this.credentials$.getValue()): void {
    if (this.isUserLogged$.getValue()) { this.logOut(); }

    const token: string = this.encryptToken(credentials);
    this.credentials$.next({...credentials, token});
    this.toggleUserLoggedState();
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(this.credentials$.getValue()));
    this.loggedUserLogin = credentials.login;

    this.goToMainPage();
  }

  public logOut(): void {
    if (!this.isUserLogged$.getValue()) { return; }

    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    this.loggedUserLogin = DEFAULT_USER_LOGIN;
    this.toggleUserLoggedState();
    this.goToLoginPage();
  }

  public getLoginCredentialsFromLS(): void {
    const credentials: Credentials = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
    this.credentials$.next(credentials);

    if (credentials) {
      this.isUserLogged$.next(true);
      this.loggedUserLogin = credentials.login;
    }
  }
}
