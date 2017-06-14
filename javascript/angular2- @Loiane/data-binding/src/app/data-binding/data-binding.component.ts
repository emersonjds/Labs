import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://impacta.com.br'
  img: string = 'http://lorempixel.com/400/200/business/'

  constructor() { }

  ngOnInit() {
  }

  valorAtual = ''

  botaoClicado() {
    alert("Clicou")
  }


  escreveNaTela(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value
  }


}
