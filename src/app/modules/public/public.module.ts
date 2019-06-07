import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './components/landing/landing.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent
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
