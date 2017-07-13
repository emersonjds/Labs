import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class CursosService {

  http: Http
  dados: any[] = []

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'Javascript' },
      { id: 4, nome: 'NodeJS' },
      { id: 5, nome: 'Ruby' },
      { id: 6, nome: 'Pyhton' }
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();

    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }
}
