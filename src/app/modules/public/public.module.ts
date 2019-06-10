import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './components/landing/landing.component';
import {SharedModule} from '../shared/shared.module';
import { FeaturedComponent } from './components/featured/featured.component';

@NgModule({
  declarations: [
    LandingComponent,
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ],
})
export class PublicModule {
}
