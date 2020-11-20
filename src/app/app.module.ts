import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { SortingButtonComponent } from './components/sorting-button/sorting-button.component';
import { LoginComponent } from './components/login/login.component';
import { SortingBlockComponent } from './components/sorting-block/sorting-block.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomBorderColorizerDirective } from './directives/bottom-border-colorizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    LogoComponent,
    SortingButtonComponent,
    LoginComponent,
    SortingBlockComponent,
    ResultsListComponent,
    ResultsItemComponent,
    BottomBorderColorizerDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
