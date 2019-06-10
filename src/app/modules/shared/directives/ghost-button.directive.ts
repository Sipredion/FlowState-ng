import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGhostButton]'
})
export class GhostButtonDirective implements OnInit {

  @Input() color: string;
  @Input() size: string;
  @Input() disabled?: boolean;

  private buttonColor: string;
  private buttonFocusColor: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  hover() {
    if (!this.disabled) {
      this.onHover();
    }
  }

  @HostListener('mouseleave')
  unHover() {
    this.disableHover();
  }

  @HostListener('mousedown')
  click() {
    if (!this.disabled) {
    this.onMouseClick();
    }
  }

  @HostListener('mouseup')
  unClick() {
    this.restoreDefault();
  }

  @HostListener('focus')
  focus() {
    if (!this.disabled) {
      this.onFocus();
    }
  }

  @HostListener('focusout')
  unFocus() {
    this.disableFocus();
  }

  ngOnInit() {
    this.setInitialStyle(this.color, this.disabled);
  }

  // Button State Functions //

  onHover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', `rgba(${this.buttonColor}, 0.4)`);
  }

  disableHover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

  onMouseClick() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `inset 0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.4)`
    );
  }

  onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'outline', `rgb(${this.buttonColor}) auto 2px`);
  }

  disableFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'outline', 'none');
  }

  restoreDefault() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.4)`
    );
  }

  private setInitialStyle(color: string, disabled: boolean) {
    this.setButtonColor(color, disabled);
    const el = this.el.nativeElement;
    this.renderer.addClass(el, 'ghost-button-initial');
    this.renderer.setStyle(el, 'font-size', '.9rem');
    this.renderer.setStyle(el, 'color', `rgb(255, 255, 255)`);
    this.renderer.setStyle(el, 'border', `1px solid rgb(${this.buttonColor})`);
    this.renderer.setStyle(el, 'text-shadow', `0 1px 3px rgba(0, 0, 0, 0.2)`);
    this.renderer.setStyle(
      el,
      'box-shadow',
      `0 2px 4px rgba(${this.buttonColor}, 0.4), 0 0 1px rgba(${this.buttonColor}, 0.4)`
    );
    this.setButtonSize(this.size, el);
  }

  protected setButtonSize(size: string, el: ElementRef) {
    switch (size) {
      case 'xl':
        this.renderer.setStyle(el, 'width', '14rem');
        this.renderer.setStyle(el, 'height', '3rem');
        break;
      case 'lg':
        // return this.renderer.setStyle(el, 'font-size', '1.5rem');
        return this.renderer.setStyle(el, 'width', '9rem');
      case 'md':
        // return this.renderer.setStyle(el, 'font-size', '1.3rem');
        return this.renderer.setStyle(el, 'width', '6rem');
      case 'sml':
        // return this.renderer.setStyle(el, 'font-size', '.9rem');
        return this.renderer.setStyle(el, 'width', '3rem');
      case 'xs':
        // return this.renderer.setStyle(el, 'font-size', '.7rem');
        return this.renderer.setStyle(el, 'width', '1rem');
      default:
        return this.renderer.setStyle(el, 'font-size', '.9rem');
    }
  }

  protected setButtonColor(color: string, disabled: boolean) {
    if (!disabled) {
      switch (color) {
        case 'primary':
          this.buttonColor = '120, 218, 5';
          this.buttonFocusColor = '72, 135, 0';
          break;
        case 'accent':
          this.buttonColor = '12, 103, 153';
          this.buttonFocusColor = '4, 63, 94';
          break;
        case 'warn':
          this.buttonColor = '241, 59,  6';
          this.buttonFocusColor = '148, 33,  0';
          break;
        case 'light':
          this.buttonColor = '255, 255, 255';
          this.buttonFocusColor = '200, 200, 200';
          break;
        default:
          this.buttonColor = '235, 235, 235';
          this.buttonFocusColor = '255, 255, 255';
          break;
      }
    } else {
      // Set Default color for disabled buttons
      this.buttonColor = '61, 61, 61';
      this.buttonFocusColor = '0, 0, 0';
    }
  }

}
