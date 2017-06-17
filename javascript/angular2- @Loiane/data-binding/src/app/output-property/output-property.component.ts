import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0
  @Output() mudouValor = new EventEmitter() //o Output possibilita que esse evento seja propagado

  incrementa() {
    this.valor++
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa() {
    this.valor--
    this.mudouValor.emit({ novoValor: this.valor })
    //na passagem do evento a chamada de emit pode passar uma string ou um objeto complexo
  }

  constructor() { }

  ngOnInit() {
  }



}
