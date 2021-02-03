import { Injectable } from '@angular/core';
import { 
  CanDeactivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  CanLoad, 
  Route, 
  Router, 
  UrlSegment,
} from '@angular/router';

import { LogoComponent } from '@core/components/logo/logo.component';
import { LoginService } from '@auth/services/login/login.service';

@Injectable()
export class CanLeaveAuthGuard implements CanDeactivate<LogoComponent>, CanLoad {
  constructor(private loginService: LoginService, private router: Router) { }

  private checkIsUserLogged(): boolean {
    return this.loginService.isUserLogged;
  }

  public canDeactivate(
    component: LogoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      return this.checkIsUserLogged();
  }

  public canLoad(route: Route, segments: UrlSegment[]): boolean  {
    if (!this.checkIsUserLogged()) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;    
  }
}
