import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursosDetalhesComponent
  ],
  exports: [CursosComponent],
  providers: [CursosService]
})
export class CursosModule { }