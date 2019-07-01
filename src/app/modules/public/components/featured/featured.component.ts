import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Render} from '../../../shared/models/render';
import {Web} from '../../../shared/models/web';
import {BaseComponent} from '../../../shared/components/base.component';
import {FeaturedService} from '../../services/featured.service';
import {FeaturedArtService} from '../../services/featured-art.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedComponent implements OnInit, OnChanges {

  @ViewChild('featured', {static: true}) featured: ElementRef;

  @Input() scroll;

  currentType = 'art';

  featuredProjects: Array<Render | Web>;
  featuredArt: Array<Render> = [];
  featuredWeb: Array<Web>;

  constructor(private featuredService: FeaturedArtService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.featuredService.getFeaturedArtwork().subscribe(featuredArt => {
      featuredArt.forEach(artwork => {
        this.featuredArt.push(new Render(artwork));
      });
      this.setFeaturedProjects(this.currentType);
      // TODO: Figure out a way to remove the call to 'detectChanges()'
      this.cd.detectChanges();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scroll'].currentValue !== undefined) {
      this.featured.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  setFeaturedProjects(type: string) {
    this.currentType = type;
    switch (type) {
      case 'art':
        this.featuredProjects = this.featuredArt;
        break;
      case 'web':
        this.featuredProjects = this.featuredWeb;
    }
  }
}
