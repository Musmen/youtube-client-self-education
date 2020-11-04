import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LogoComponent } from './logo/logo.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { LoginComponent } from './login/login.component';
import { SortingBlockComponent } from './sorting-block/sorting-block.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    LogoComponent,
    SettingsButtonComponent,
    LoginComponent,
    SortingBlockComponent,
    ResultsListComponent,
    ResultsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
