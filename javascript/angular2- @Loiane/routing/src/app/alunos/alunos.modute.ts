

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoRoutingModule } from './alunos.routing.module';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosService } from './alunos.service';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ],
  providers: [AlunosService]
})
export class AlunosModule {

}
