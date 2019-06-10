import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {mockArtModels, mockWebModels} from '../../../shared/mock/mock-featured.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedComponent implements OnInit, OnChanges {

  @ViewChild('featured', {static: true}) featured: ElementRef;

  @Input() scroll;

  // TODO: Return a real array of featured projects
  featuredProjects = mockWebModels;
  currentType = 'WEB';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scroll'].currentValue !== undefined) {
      this.featured.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  changeFeatureModels(type: string) {
    // REFACTOR: Find a why to remove 'currentType'
    this.currentType = type;
    type === 'WEB' ?
      this.featuredProjects = mockWebModels :
      this.featuredProjects = mockArtModels;
  }

}
