import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>()
  static criouNovoCurso = new EventEmitter<string>()

  cursos: string[] = ['Angular', 'Phonegap', 'Java']

  constructor(private _logService: LogService) {
    console.log('CursosService')
  }

  getCursos() {
    this._logService.consoleLog('Criando um novo curso')
    return this.cursos
  }

  addCurso(curso: string) {
    this._logService.consoleLog(`Propagando evento em componentes ${curso}`)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }

}
