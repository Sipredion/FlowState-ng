import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material/material.module';

@NgModule({
  declarations: [
    // Components

    // Pipes

    // Directives
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    // Components

    // Pipes

    // Directives

    // Modules
    MaterialModule
  ]
})
export class SharedModule {
}
