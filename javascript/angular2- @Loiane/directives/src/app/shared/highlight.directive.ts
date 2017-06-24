import { Directive, HostListener, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //fica escutando o evento no DOM
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor
  }

  //fica escutando o evento no DOM
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor
  }

  //associa o dado a tag
  @HostBinding('style.backgroundColor') backgroundColor: string

  @Input() defaultColor: string = 'white'
  @Input('highlight') highlightColor: string = 'red'

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }

}
