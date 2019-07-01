import {Component, Input, OnInit} from '@angular/core';
import {GalleryType} from '../../../models/gallery-type.enum';
import {Render} from '../../../models/render';
import {Web} from '../../../models/web';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  @Input() featured: Render | Web;

  showDetails = false;
  originSite: string;

  constructor() {
  }

  ngOnInit() {
    this.originSite =
      this.featured.type === GalleryType.WEB ?
        'Github' :
        'ArtStation';
  }

}
