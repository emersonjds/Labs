import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoDetalhesComponent],
  exports: [CursosComponent]
})
export class CursosModule { }
