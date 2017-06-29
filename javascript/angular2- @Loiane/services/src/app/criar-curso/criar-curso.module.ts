
import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from './../cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReceberCursoCriadoComponent } from './../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CriarCursoComponent
  ],
  providers: [CursosService],

})
export class CriarCursoModule { }
