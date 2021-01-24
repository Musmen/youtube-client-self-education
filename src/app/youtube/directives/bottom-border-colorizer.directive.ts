import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { getBottomBorderColor } from '../../common/helper';

@Directive({
  selector: '[appBottomBorderColorizer]'
})
export class BottomBorderColorizerDirective {
  @Input('appBottomBorderColorizer') public postDate: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private paintBottomBorder(): void {
    this.renderer.setStyle(this.el.nativeElement, 'borderBottomColor', getBottomBorderColor(this.postDate));
  }

  public ngOnChanges(): void {
    this.paintBottomBorder();
  }
}
