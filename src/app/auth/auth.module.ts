import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ]
})
export class AuthModule { }
