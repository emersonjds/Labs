
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

import { Subscription } from 'rxjs/RX';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  proximaPagina() {
    //this.pagina++;
    this._router.navigate(['/cursos'],
      {
        queryParams: { 'pagina': ++this.pagina }
      }
    )
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    this.inscricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
