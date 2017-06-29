import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from './../cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CriarCursoComponent
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
