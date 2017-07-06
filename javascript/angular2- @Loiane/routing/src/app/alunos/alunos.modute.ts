import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoRoutingModule } from './alunos.routing.module';

import { AlunosComponent } from './alunos.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ],
  providers: []
})
export class AlunosModule {

}
