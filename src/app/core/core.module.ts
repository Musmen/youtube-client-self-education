import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './pages/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { SortingButtonComponent } from './components/sorting-button/sorting-button.component';
import { LoginComponent } from './components/login/login.component';
import { SortingBlockComponent } from './components/sorting-block/sorting-block.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    LogoComponent,
    SortingButtonComponent,
    LoginComponent,
    SortingBlockComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    // FormsModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
