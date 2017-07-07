import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'alunoo1', email: 'aluno01@email.com' },
    { id: 2, nome: 'alunoo2', email: 'aluno02@email.com' },
    { id: 3, nome: 'alunoo3', email: 'aluno03@email.com' },
    { id: 4, nome: 'alunoo4', email: 'aluno04@email.com' },
    { id: 5, nome: 'alunoo5', email: 'aluno05@email.com' },
    { id: 6, nome: 'alunoo6', email: 'aluno06@email.com' },
  ]

  constructor() { }

  getAlunos() {
    return this.alunos;
  }
}
