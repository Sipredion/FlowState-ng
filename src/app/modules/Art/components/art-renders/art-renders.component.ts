import {Component, OnInit} from '@angular/core';
import {ArtworkService} from '../../services/artwork.service';
import {Render} from '../../../shared/models/render';
import {BaseComponent} from '../../../shared/components/base.component';

@Component({
  selector: 'app-art-renders',
  templateUrl: './art-renders.component.html',
  styleUrls: ['./art-renders.component.scss']
})
export class ArtRendersComponent extends BaseComponent implements OnInit {

  allArtwork: Array<Render> = [];

  constructor(private artworkService: ArtworkService) {
    super();
  }

  ngOnInit() {
    this.isLoading();
    this.artworkService.getAllArtwork().subscribe(artwork => {
      artwork.forEach(item => {
        this.allArtwork.push(new Render(item));
      });
      this.isLoaded();
      console.log(this.allArtwork);
    })
  }

}
