import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { LoginService } from '@auth/services/login/login.service';
import { Credentials } from '@auth/models/credentials.model';
import { EMPTY_CREDENTIALS } from '@common/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public isUserLogged: boolean;

  public loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService) { }

  private setLoggingState(isUserLogged: boolean): void {
    this.isUserLogged = isUserLogged;
  }

  private setCredentials(newLoginFormValue: Credentials): void {
    this.loginService.credentials$.next(newLoginFormValue);
  }

  public loginFormSubmit(): void {
    this.loginService.logIn({
      login: this.loginForm.controls.login.value,
      password: this.loginForm.controls.password.value,
    });
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public ngOnInit(): void {
    this.setLoggingState = this.setLoggingState.bind(this);
    this.setCredentials = this.setCredentials.bind(this);

    let subscription: Subscription = this.loginService.isUserLogged$
      .subscribe(this.setLoggingState);
    this.subscriptions = [subscription];

    const credentials: Credentials = this.loginService.credentials$.getValue()
      || EMPTY_CREDENTIALS;

    this.loginForm.setValue({
      login: credentials.login,
      password: credentials.password,
    });

    subscription = this.loginForm.valueChanges
      .subscribe(this.setCredentials);
    this.subscriptions.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
