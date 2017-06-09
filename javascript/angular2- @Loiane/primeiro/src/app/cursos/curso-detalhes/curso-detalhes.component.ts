import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

  titulo : string = 'Acesso a detalhes do Curso'

  constructor() { }

  ngOnInit() {
  }

}
