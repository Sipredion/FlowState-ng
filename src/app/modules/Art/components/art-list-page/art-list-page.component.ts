import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArtworkService} from '../../services/artwork.service';
import {Render} from '../../../shared/models/render';
import {BaseComponent} from '../../../shared/components/base.component';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-art-renders',
  templateUrl: './art-list-page.component.html',
  styleUrls: ['./art-list-page.component.scss']
})
export class ArtListPageComponent extends BaseComponent implements OnInit, OnDestroy {

  allArtwork: Array<Render> = [];
  featuredArtwork: Array<Render> = [];
  currentSet: Array<Render>;
  paramSubscription: Subscription;

  constructor(private artworkService: ArtworkService,
              public route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.isLoading();
      this.changeCurrentSet(params['type']);
    });
    this.fetchAllArtwork();
    this.fetchFeaturedArtwork();
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  fetchAllArtwork() {
    this.artworkService.getAllArtwork().subscribe(artwork => {
      artwork.forEach(item => {
        this.allArtwork.push(new Render(item));
        this.isLoaded();
      });
    });
  }

  fetchFeaturedArtwork() {
    this.artworkService.getFeaturedArtwork().subscribe(artwork => {
      artwork.forEach(item => {
        this.featuredArtwork.push(new Render(item));
        this.isLoaded();
      });
    });
  }

  changeCurrentSet(type: string) {
    type === 'featured' ?
      this.currentSet = this.featuredArtwork :
      this.currentSet = this.allArtwork;
    this.isLoaded();
  }

}
