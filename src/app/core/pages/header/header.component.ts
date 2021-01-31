import { Component, OnInit } from '@angular/core';
import { LoginService } from '@auth/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  public ngOnInit(): void {
    this.loginService.getLoginCredentialsFromLS();
  }
}
