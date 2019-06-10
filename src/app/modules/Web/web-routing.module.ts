import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebHomeComponent} from './components/web-home/web-home.component';
import {WebAppsComponent} from './components/web-apps/web-apps.component';

const routes: Routes = [
  {
    path: 'home',
    component: WebHomeComponent,
    children: [
      {path: 'apps', component: WebAppsComponent},
      {path: '', pathMatch: 'full', redirectTo: '/web/home/apps'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {
}
