import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtHomeComponent } from './components/art-home/art-home.component';
import { ArtListPageComponent } from './components/art-list-page/art-list-page.component';
import {SharedModule} from '../shared/shared.module';
import { SingleArtworkComponent } from './components/single-artwork/single-artwork.component';

@NgModule({
  declarations: [ArtHomeComponent, ArtListPageComponent, SingleArtworkComponent],
  imports: [
    CommonModule,
    ArtRoutingModule,
    SharedModule
  ]
})
export class ArtModule { }
