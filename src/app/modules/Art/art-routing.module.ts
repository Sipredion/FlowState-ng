import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArtHomeComponent} from './components/art-home/art-home.component';
import {ArtRendersComponent} from './components/art-renders/art-renders.component';

const routes: Routes = [
  {
    path: 'home',
    component: ArtHomeComponent,
    children: [
      {path: 'renders', component: ArtRendersComponent},
      {path: '', pathMatch: 'full', redirectTo: '/art/home/renders'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule {
}
