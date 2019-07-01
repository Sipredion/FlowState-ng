import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogContentService} from '../../services/blog-content.service';
import {SinglePostModel} from '../../models/single-post.model';
import {Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  @ViewChild('postHeader', {static: true}) postHeader: ElementRef<HTMLElement>;

  post: SinglePostModel;
  loading: Observable<boolean>;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private contentService: BlogContentService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.contentService.getPostById(params['id']).subscribe(post => {
        this.post = post;
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
