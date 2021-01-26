import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@core/core.module';
import { YouTubeModule } from '@youtube/youtube.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';

import { StateService } from '@core/services/state/state.service';
import { SearchService } from '@youtube/services/search/search.service';

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
  ],
  providers: [StateService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
