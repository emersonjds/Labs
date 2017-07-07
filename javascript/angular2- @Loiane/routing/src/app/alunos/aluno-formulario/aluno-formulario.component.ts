import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.aluno = this._alunosService.getAluno(id);

        if (this.aluno === null)
          this.aluno = {}
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
