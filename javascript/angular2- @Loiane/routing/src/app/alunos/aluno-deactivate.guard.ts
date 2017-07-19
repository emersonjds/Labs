import { IFormCanDeactivate } from './../guards/iform-candeactivate';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('guarda de rota candeactivate')
    return component.podeDesativar();
  }
}
