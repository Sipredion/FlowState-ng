import {Component, OnInit} from '@angular/core';
import {ArtworkService} from '../../services/artwork.service';
import {ActivatedRoute} from '@angular/router';
import {Render} from '../../../shared/models/render';
import {BaseComponent} from '../../../shared/components/base.component';

@Component({
  selector: 'app-single-artwork',
  templateUrl: './single-artwork.component.html',
  styleUrls: ['./single-artwork.component.scss']
})
export class SingleArtworkComponent extends BaseComponent implements OnInit {

  artwork: Render;

  constructor(private artworkService: ArtworkService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isLoading();
      this.artworkService.getSingleArtworkById(params['id']).subscribe(artwork => {
        this.artwork = artwork;
        this.isLoaded();
      });
    });
  }

}
