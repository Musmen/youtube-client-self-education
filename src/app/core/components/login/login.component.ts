import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginService } from '@auth/services/login/login.service';
import { DEFAULT_USER_LOGIN } from '@common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public isUserLogged: boolean;
  public isCredentialsValid: boolean;

  public get loggedUserLogin(): string {
    return this.loginService.loggedUserLogin || DEFAULT_USER_LOGIN;
  }

  constructor(private loginService: LoginService) { }

  private setUserLoggingState(isUserLogged: boolean): void {
    this.isUserLogged = isUserLogged;
  }

  private setCredentialsValidationState(isCredentialsValid: boolean): void {
    this.isCredentialsValid = isCredentialsValid;
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public logIn(): void {
    this.loginService.logIn();
  }

  public ngOnInit(): void {
    this.subscriptions = [];
    this.setUserLoggingState = this.setUserLoggingState.bind(this);
    this.setCredentialsValidationState = this.setCredentialsValidationState.bind(this);

    let subscription: Subscription = this.loginService.isUserLogged$
      .subscribe(this.setUserLoggingState);
    this.subscriptions = [subscription];

    subscription = this.loginService.isCredentialsValid$
      .subscribe(this.setCredentialsValidationState);
    this.subscriptions.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
