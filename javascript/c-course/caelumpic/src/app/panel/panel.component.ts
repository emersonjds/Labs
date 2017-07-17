import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
    if (this.titulo.length >= 11) {
      this.titulo = `${ (this.titulo.substr(0, 7)) }...`
    }
    return this.titulo
  }
}
