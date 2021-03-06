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

  constructor(private router: Router,
              private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cd.detectChanges();
  }

  showPost(id: number, name: string) {
    this.router.navigateByUrl(`art/home/single/${id}/${name}`);
  }
}
