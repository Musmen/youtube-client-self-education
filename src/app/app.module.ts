import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { LoginComponent } from './components/login/login.component';
import { SortingBlockComponent } from './components/sorting-block/sorting-block.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    LogoComponent,
    SearchButtonComponent,
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
