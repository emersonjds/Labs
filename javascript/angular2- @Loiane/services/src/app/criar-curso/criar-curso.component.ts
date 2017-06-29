
import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos : string [] = []

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos()
  }

}
