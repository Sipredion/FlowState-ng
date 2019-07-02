import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArtHomeComponent} from './components/art-home/art-home.component';
import {ArtListPageComponent} from './components/art-list-page/art-list-page.component';
import {SingleArtworkComponent} from './components/single-artwork/single-artwork.component';

const routes: Routes = [
  {
    path: '',
    component: ArtHomeComponent,
    children: [
      {path: 'type/:type', component: ArtListPageComponent},
      {path: 'single/:id/:title', component: SingleArtworkComponent},
      {path: '', pathMatch: 'full', redirectTo: '/art/type/all'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule {
}
