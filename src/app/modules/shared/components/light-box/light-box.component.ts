import {Component, Input, OnInit} from '@angular/core';
import {FeaturedModel} from '../../models/featured.model';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  @Input() featured: FeaturedModel;

  showDetails = false;
  originSite: string;

  constructor() {
  }

  ngOnInit() {
    this.originSite =
      this.featured.type === 'WEB' ?
        'Github' :
        'ArtStation';
  }

}
