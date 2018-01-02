import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() clicked: EventEmitter = new EventEmitter();
  public person = {
    nome: 'Emerson'
  };

  constructor() { }

  ngOnInit() {
  }

  private handleClick() {
    this.clicked.emit(console.log(this.person));
  }

}
