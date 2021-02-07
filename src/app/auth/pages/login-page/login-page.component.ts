import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from '@auth/models/credentials.model';
import { LoginService } from '@auth/services/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public loginForm: FormGroup;

  public get isUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  constructor(private loginService: LoginService) { }

  public loginFormSubmit(): void {
    this.loginService.logIn();
    // {
    //   login: this.loginForm.controls.login.value,
    //   password: this.loginForm.controls.password.value,
    // });
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(this.loginService.credentials.login, Validators.required),
      password: new FormControl(this.loginService.credentials.password, Validators.required),
    });

    const subscription: Subscription = this.loginForm.valueChanges
    .subscribe((newCredentials: Credentials) => {
      this.loginService.credentials$.next(
        {...newCredentials, token: this.loginService.credentials.token}
      );
    });
    this.subscriptions = [subscription];
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
