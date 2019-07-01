import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {SinglePostComponent} from './components/single-post/single-post.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BlogHomeComponent,
    SinglePostComponent,
    FeaturedPostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule {
}
