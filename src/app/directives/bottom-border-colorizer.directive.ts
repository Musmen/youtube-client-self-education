import { Directive, ElementRef, Input } from '@angular/core';
import { getBottomBorderColor } from '../common/helper';

@Directive({
  selector: '[appBottomBorderColorizer]'
})
export class BottomBorderColorizerDirective {
  @Input('appBottomBorderColorizer') public postDate: string;

  constructor(private el: ElementRef) { }

  private paintBottomBorder(): void {
    this.el.nativeElement.style.borderBottomColor = getBottomBorderColor(this.postDate);
  }

  public ngOnChanges(): void {
    this.paintBottomBorder();
  }
}
