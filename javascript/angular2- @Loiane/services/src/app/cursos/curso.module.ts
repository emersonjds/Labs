import { CursosComponent } from './cursos.component';

import { CursosService } from './../cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  providers: [CursosService],

})
export class CursoModule { }
