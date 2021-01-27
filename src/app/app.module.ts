import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@core/core.module';
import { YouTubeModule } from '@youtube/youtube.module';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from '@auth/auth.module';

import { AppComponent } from './app.component';

import { StateService } from '@core/services/state/state.service';
import { YouTubeService } from '@youtube/services/youtube/youtube.service';
import { LoginService } from '@auth/services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubeModule,
    SharedModule,
    CoreModule,
    AuthModule,
  ],
  providers: [
    StateService,
    YouTubeService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
