import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtHomeComponent } from './components/art-home/art-home.component';
import { ArtRendersComponent } from './components/art-renders/art-renders.component';
import {SharedModule} from '../shared/shared.module';
import { SingleArtworkComponent } from './components/single-artwork/single-artwork.component';

@NgModule({
  declarations: [ArtHomeComponent, ArtRendersComponent, SingleArtworkComponent],
  imports: [
    CommonModule,
    ArtRoutingModule,
    SharedModule
  ]
})
export class ArtModule { }
