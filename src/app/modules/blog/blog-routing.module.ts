import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {SinglePostComponent} from './components/single-post/single-post.component';
import {FeaturedPostsComponent} from './components/featured-posts/featured-posts.component';

const routes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
    children: [
      {path: 'featured', component: FeaturedPostsComponent},
      {path: 'post/:id/:postSlug', component: SinglePostComponent},
      {path: '', pathMatch: 'full', redirectTo: '/blog/featured'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
