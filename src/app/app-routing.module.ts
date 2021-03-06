import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './modules/public/components/landing/landing.component';

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  // Lazy-loaded
  {path: 'web', loadChildren: () => import('./modules/Web/web.module').then(m => m.WebModule)},
  {path: 'art', loadChildren: () => import('./modules/Art/art.module').then(m => m.ArtModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'blog', loadChildren: ()=> import('./modules/blog/blog.module').then(m => m.BlogModule)},
  // Catch-all
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  // TODO: Create a 404 component
  {path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
