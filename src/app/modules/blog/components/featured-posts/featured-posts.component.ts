import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {BlogContentService} from '../../services/blog-content.service';
import {SinglePostModel} from '../../models/single-post.model';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss']
})
export class FeaturedPostsComponent implements OnInit {

  posts: Array<SinglePostModel> = [];
  postSubscription: Subscription;

  constructor(private contentService: BlogContentService) { }

  ngOnInit() {
    // TODO: Research rxjs take() operator to avoid managing subscriptions in the component.
    this.postSubscription = this.contentService.getAllPosts().subscribe(posts => {
      this.posts = posts.map(post => new SinglePostModel(post));
    })
  }

}
