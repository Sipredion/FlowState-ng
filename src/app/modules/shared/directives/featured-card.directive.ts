import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFeaturedCard]'
})
export class FeaturedCardDirective implements OnInit {

  @Input() imageUrl: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'featured-post');
    this.renderer.setStyle(this.el.nativeElement, 'background', `url("${this.imageUrl}") no-repeat center/contain`);
  }

}
