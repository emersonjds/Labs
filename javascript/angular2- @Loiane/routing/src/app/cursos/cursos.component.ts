
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

}
