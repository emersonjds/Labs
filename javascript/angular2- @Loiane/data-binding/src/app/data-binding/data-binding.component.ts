import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.impacta.com.br'
  cursoAngular: boolean = true
  urlImagem: string = 'http://lorempixel.com/output/abstract-h-c-250-256-1.jpg'
  valorAtual: string = ''
  valorSalvo: string = ''
  isMouseOver: boolean = false
  nomeDoCurso: string = 'Angular'

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Clicou')
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>event.target).value)
  }

  salvarValor(valor) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit() {
  }

}
