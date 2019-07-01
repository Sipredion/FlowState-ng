import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {SidebarArtworkComponent} from './components/sidebar-artwork/sidebar-artwork.component';
import {ArtworkUploadComponent} from './components/sidebar-artwork/artwork-upload/artwork-upload.component';
import {MatBottomSheet} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarArtworkComponent,
    ArtworkUploadComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarArtworkComponent
  ],
  providers: [MatBottomSheet]
})
export class AdminModule {
}
