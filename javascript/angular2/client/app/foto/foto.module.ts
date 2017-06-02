import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from '../foto/foto.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FotoComponent, FiltroPorTitulo],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [FotoService]
})
export class FotoModule { }