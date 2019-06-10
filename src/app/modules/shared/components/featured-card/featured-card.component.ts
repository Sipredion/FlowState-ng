import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FeaturedModel} from '../../models/featured.model';
import {MatDialog} from '@angular/material';
import {LightBoxComponent} from '../light-box/light-box.component';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  @ViewChild('lightBox', {static: true}) lightBox: TemplateRef<LightBoxComponent>;

  @Input() featured: FeaturedModel;
  originSite: string;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.featured.type === 'WEB' ? this.originSite = 'Github' : this.originSite = 'ArtStation';
  }

  viewContent() {
    this.dialog.open(this.lightBox);
  }

}
