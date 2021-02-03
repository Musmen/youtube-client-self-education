import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '@auth/services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public get isUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  constructor(private loginService: LoginService) { }

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
    this.loginForm.setValue({
      login: (this.loginService.credentials && this.loginService.credentials.login) || '',
      password: (this.loginService.credentials && this.loginService.credentials.password) || '',
    });
  }
}
