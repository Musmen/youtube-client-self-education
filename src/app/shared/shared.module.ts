import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { ErrorMessageComponent } from './components/error-message/error-message.component';

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
  ],
  imports: [
    CommonModule,
    ...angularMaterialModules,
  ],
  exports: [
    ...angularMaterialModules,
    ErrorMessageComponent,
  ]
})
export class SharedModule { }
