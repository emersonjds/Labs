import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>()
  static criouNovoCurso =  new EventEmitter<string>()

  cursos: string[] = ['Angular', 'Phonegap', 'Java']

  constructor() {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos
  }

  addCurso(curso: string) {
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }

}
