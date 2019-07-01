import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material/material.module';
import {GhostButtonDirective} from './directives/ghost-button.directive';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FeaturedCardDirective} from './directives/featured-card.directive';
import {FeaturedCardComponent} from './components/old/featured-card/featured-card.component';
import {LightBoxComponent} from './components/old/light-box/light-box.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {FeaturedBlogComponent} from './components/old/featured-blog/featured-blog.component';
import { ArtworkGridComponent } from './components/artwork-grid/artwork-grid.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    // Components
    SpinnerComponent,
    FeaturedCardComponent,
    LightBoxComponent,
    NavigationComponent,
    FeaturedBlogComponent,
    ArtworkGridComponent,

    // Pipes
    SafeHtmlPipe,

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
    FeaturedBlogComponent,
    ArtworkGridComponent,

    // Pipes
    SafeHtmlPipe,

    // Directives
    GhostButtonDirective,
    FeaturedCardDirective,
  ]
})
export class SharedModule {
}
