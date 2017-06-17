import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input() nome: string = ''
  //A notação @Input é colocada nos atributos que queremos expor para outros componentes

  // @Input('nome') nomeCurso : string = ''
  //Quando colocado desta forma estamos passando um alis para o atributo que ficara exposto para outros componentes
  //internamente -> nomeCurso
  //externamente -> nome

  constructor() { }

  ngOnInit() {
  }

}
