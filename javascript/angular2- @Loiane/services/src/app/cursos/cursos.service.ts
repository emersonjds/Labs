import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ['Angular', 'Phonegap', 'Java']

  constructor() {
    console.log('CursoService')
  }

  getCursos() {
    return this.cursos
  }

  addCurso(curso: string) {
    this.cursos.push(curso)
  }

}
