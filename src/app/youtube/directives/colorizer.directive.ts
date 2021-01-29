import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { getColorByDate } from '@common/helper';

@Directive({
  selector: '[appColorizerByDate]'
})
export class ColorizerByDateDirective {
  @Input('appColorizerByDate') public postDate: string;
  @Input() public stylePropertiesToColorize?: string[] = ['borderBottomColor'];
  @Input() public colorAlfaHexAdditionList?: string[] = [''];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private colorize(): void {
    this.stylePropertiesToColorize.forEach((styleProperty, propertyIndex) => {
      const newColor: string = getColorByDate(this.postDate)
        + (this.colorAlfaHexAdditionList[propertyIndex] || '');

      this.renderer.setStyle(this.el.nativeElement, styleProperty, newColor);
    });
  }

  public ngOnChanges(): void {
    this.colorize();
  }
}
