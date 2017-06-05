import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from '../foto/foto.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FotoComponent, FiltroPorTitulo],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [FotoService] // a classe nao recebe um decorator dessa forma ela é injetada como um provider e recebe um @injectable para que o angular reconhecar e trate as dependencias
})
export class FotoModule { }