import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebHomeComponent } from './components/web-home/web-home.component';
import { WebAppsComponent } from './components/web-apps/web-apps.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [WebHomeComponent, WebAppsComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
