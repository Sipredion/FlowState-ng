import { Component, OnInit } from '@angular/core';
import {BlogContentService} from '../../services/blog-content.service';
import {forkJoin} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  featuredPosts: Array<{ name: string, slug: string, id: number }>;
  allPosts: Array<{ name: string, slug: string, id: number }>;

  constructor(private contentService: BlogContentService,
              private router: Router) { }

  ngOnInit() {
    const postMeta = this.contentService.getPostMeta();
    const featuredMeta = this.contentService.getFeaturedPostsMeta();

    forkJoin([postMeta, featuredMeta]).subscribe(results => {
      if (results) {
        this.allPosts = results[0];
        this.featuredPosts = results[1];
      }
      console.log(results);
    })
  }

  routeToPost(postId: number, slug: string) {
    this.router.navigateByUrl(`/blog/post/${postId}/${slug}`);
  }
}
