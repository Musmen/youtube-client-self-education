import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';

import { StateService } from '@core/services/state/state.service';
import { YouTubeService } from '@youtube/services/youtube/youtube.service';
import { LoginService } from '@auth/services/login/login.service';

import { AuthGuard } from '@auth/guards/auth.guard';

import { YouTubeHttpInterceptor } from '@youtube/interceptors/youtube-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    StateService,
    YouTubeService,
    LoginService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YouTubeHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
