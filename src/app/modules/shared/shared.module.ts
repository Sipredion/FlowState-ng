import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material/material.module';
import {GhostButtonDirective} from './directives/ghost-button.directive';
import {SpinnerComponent} from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    // Components
    SpinnerComponent,

    // Pipes

    // Directives
    GhostButtonDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    // Components
    SpinnerComponent,

    // Pipes

    // Directives
    GhostButtonDirective,

    // Modules
    MaterialModule
  ]
})
export class SharedModule {
}
