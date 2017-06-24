import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle( //pegando o elemento em si, no caso a tag "p"
    //   this._elementeRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // )
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(
    //   this._elementeRef.nativeElement,
    //   'background-color',
    //   'white'
    // )
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor() { }

}
