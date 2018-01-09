import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() clicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  private handleClick() {
    this.clicked.emit({ nome: 'Emerson', age: 28 });
  }

  public mostrarMensagem() {
    console.log('CONSEGUIU MOSTRAR A MENSAGEM');
  }

  // tslint:disable-next-line:member-ordering
  nome = 'Emerson';

  isStart() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
