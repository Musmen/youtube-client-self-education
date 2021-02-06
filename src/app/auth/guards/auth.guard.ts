import { Injectable, OnDestroy } from '@angular/core';
import { CanDeactivate, CanLoad, Router, CanActivate } from '@angular/router';

import { LogoComponent } from '@core/components/logo/logo.component';
import { LoginService } from '@auth/services/login/login.service';
import { Subscription } from 'rxjs';

@Injectable()
export class AuthGuard implements CanDeactivate<LogoComponent>, CanLoad, CanActivate, OnDestroy {
  private isUserLogged: boolean;
  private subscriptions: Subscription[];

  constructor(private loginService: LoginService, private router: Router) {
    this.subscriptions = [];

    this.setUserLoggingState = this.setUserLoggingState.bind(this);
    const subscription: Subscription = this.loginService.isUserLogged$
      .subscribe(this.setUserLoggingState);

    this.subscriptions.push(subscription);
  }

  private setUserLoggingState(isUserLogged: boolean): void {
    this.isUserLogged = isUserLogged;
  }

  public canDeactivate(): boolean {
    return this.isUserLogged;
  }

  public canLoad(): boolean {
    if (!this.isUserLogged) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  public canActivate(): boolean {
    return this.canLoad();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
