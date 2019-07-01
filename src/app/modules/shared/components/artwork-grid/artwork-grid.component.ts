import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {Render} from '../../models/render';
import {Web} from '../../models/web';
import {BaseComponent} from '../base.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-artwork-grid',
  templateUrl: './artwork-grid.component.html',
  styleUrls: ['./artwork-grid.component.scss']
})
export class ArtworkGridComponent extends BaseComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChildren('featuredImg') featuredImg: QueryList<ElementRef<HTMLElement>>;

  @Input() artwork: Array<Render | Web>;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    console.log(this.artwork);
  }

  ngAfterViewInit() {
    if (this.artwork && this.artwork.length && this.featuredImg) {
      this.featuredImg.forEach((image, idx) => {
        const imgUrl = this.artwork[idx].featuredImage;
        image.nativeElement.style.background = `url("${imgUrl}") center/cover no-repeat`;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['artwork']) {
      this.isLoading();
      if (this.artwork && this.artwork.length && this.featuredImg) {
        this.featuredImg.changes.subscribe(() => {
          this.featuredImg.toArray().forEach((image, idx) => {
            const imgUrl = this.artwork[idx].featuredImage;
            image.nativeElement.style.background = `url("${imgUrl}") center/cover no-repeat`;
          });
        });
        this.isLoaded();
      }
    }
  }

  showPost(id: number, name: string) {
    this.router.navigateByUrl(`art/home/single/${id}/${name}`);
  }
}
