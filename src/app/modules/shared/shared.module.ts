import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material/material.module';
import {GhostButtonDirective} from './directives/ghost-button.directive';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FeaturedCardDirective} from './directives/featured-card.directive';
import {FeaturedCardComponent} from './components/featured-card/featured-card.component';
import { LightBoxComponent } from './components/light-box/light-box.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    // Components
    SpinnerComponent,
    FeaturedCardComponent,
    LightBoxComponent,
    NavigationComponent,

    // Pipes

    // Directives
    GhostButtonDirective,
    FeaturedCardDirective,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    // Modules
    MaterialModule,

    // Components
    SpinnerComponent,
    FeaturedCardComponent,
    LightBoxComponent,
    NavigationComponent,

    // Pipes

    // Directives
    GhostButtonDirective,
    FeaturedCardDirective,
  ]
})
export class SharedModule {
}
