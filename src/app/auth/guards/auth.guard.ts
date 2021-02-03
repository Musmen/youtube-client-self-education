import { Injectable } from '@angular/core';
import { CanDeactivate, CanLoad, Router, CanActivate } from '@angular/router';

import { LogoComponent } from '@core/components/logo/logo.component';
import { LoginService } from '@auth/services/login/login.service';

@Injectable()
export class AuthGuard implements CanDeactivate<LogoComponent>, CanLoad, CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  private checkIsUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  public canDeactivate(): boolean {
    return this.checkIsUserLogged();
  }

  public canLoad(): boolean {
    if (!this.checkIsUserLogged()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  public canActivate(): boolean {
    return this.canLoad();
  }
}
