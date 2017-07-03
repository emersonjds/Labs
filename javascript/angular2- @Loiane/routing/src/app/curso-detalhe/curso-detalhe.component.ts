
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';
import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _cursosService: CursosService) {
  }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this._cursosService.getCurso(this.id);

        if (this.curso == null) {
          this._router.navigate(['/curso-nao-encontrado'])
        }

      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
