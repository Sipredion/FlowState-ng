import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LightBoxComponent} from '../light-box/light-box.component';
import {GalleryType} from '../../../models/gallery-type.enum';
import {Render} from '../../../models/render';
import {Web} from '../../../models/web';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  @ViewChild('lightBox', {static: true}) lightBox: TemplateRef<LightBoxComponent>;
  @ViewChild('featuredCard', {static: true}) featuredCard: ElementRef<HTMLElement>;

  @Input() featured: Render | Web;
  originSite: string;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.featured.type === GalleryType.WEB ?
      this.originSite = 'Github' :
      this.originSite = 'ArtStation'
  }

  viewContent() {
    this.dialog.open(this.lightBox);
  }

}
