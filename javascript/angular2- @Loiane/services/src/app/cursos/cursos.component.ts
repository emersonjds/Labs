import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  constructor(private _cursosService: CursosService) { }

  cursos: string[] = this._cursosService.getCursos()

  ngOnInit() {}

}
