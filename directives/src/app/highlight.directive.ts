import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';

  private backgroundColor: string;

  @HostListener('mouseenter') mouseover (){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave (){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
