import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { ErrorMessageComponent } from './components/error-message/error-message.component';

import { HighlightButtonDirective } from './directives/highlight-button.directive';

// tslint:disable-next-line: typedef
const angularMaterialModules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [
    ErrorMessageComponent,
    HighlightButtonDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...angularMaterialModules,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...angularMaterialModules,
    ErrorMessageComponent,
    HighlightButtonDirective,
  ]
})
export class SharedModule { }
