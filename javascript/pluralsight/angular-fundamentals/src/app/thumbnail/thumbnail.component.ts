import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() clicked = new EventEmitter<any>();
  @Output() nextValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  private handleClick() {
    this.clicked.emit({nome: 'Emerson', age: 28});
  }

  private clicou() {
    this.nextValue.emit('VALOR EMITIDO DO FILHO');
  }

}
