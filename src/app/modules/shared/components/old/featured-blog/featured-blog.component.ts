import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SinglePostModel} from '../../../../blog/models/single-post.model';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.scss']
})
export class FeaturedBlogComponent implements OnInit {

  @ViewChild('featuredContainer', {static: true}) featured: ElementRef<HTMLElement>;

  @Input() featuredPost: SinglePostModel;

  constructor() {
  }

  ngOnInit() {
    this.featured.nativeElement.style.background = `url("${this.featuredPost.featuredImage}") center/cover no-repeat`;
  }

}
