import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://impacta.com.br'
  img: string = 'http://lorempixel.com/400/200/business/'

  valorAtual: string = ''
  valorSalvo = ''
  isMouseOver: boolean = false
  nome: string = 'abc'

  pessoa: any = {
    nome: 'def',
    idade: 15
  }

  constructor() { }

  ngOnInit() { }

  botaoClicado() {
    alert("Clicou")
  }

  escreveNaTela(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  salvarValor(valor) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

}
