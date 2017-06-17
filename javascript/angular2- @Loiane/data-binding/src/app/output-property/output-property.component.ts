import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @ViewChild('campoInput') valorCampoInput: ElementRef
  //apos a chamada do ViewChild é necessario passar o nome da variavel para associação com o componente

  @Input() valor: number = 0
  @Output() mudouValor = new EventEmitter() //o Output possibilita que esse evento seja propagado

  incrementa() {
    this.valorCampoInput.nativeElement.value++
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa() {
    this.valorCampoInput.nativeElement.value--
    this.mudouValor.emit({ novoValor: this.valor })
    //na passagem do evento a chamada de emit pode passar uma string ou um objeto complexo
  }

  constructor() { }

  ngOnInit() {
  }



}
