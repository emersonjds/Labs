import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit {

  cursos: string[]
  constructor() { }

  ngOnInit() {
  }

}
