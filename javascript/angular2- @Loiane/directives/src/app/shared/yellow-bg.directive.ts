import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[yellowBg]' // basta selecionar a tag na qual voce quer aplicar o layout selecionado
})
export class YellowBgDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    //Nao deve ser utilizado devido a ataques de xxs em cross-browsers

    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
  }
}
