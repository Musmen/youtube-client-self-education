import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appHighlightButton]' })
export class HighlightButtonDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover')
  private onMouseOver(): void {
    this.renderer.addClass(this.element.nativeElement, 'button--hovered');
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.renderer.removeClass(this.element.nativeElement, 'button--hovered');
  }
}
