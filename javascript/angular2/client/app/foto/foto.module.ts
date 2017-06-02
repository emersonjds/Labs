import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from '../foto/foto.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FotoComponent, FiltroPorTitulo, FotoService],
  exports: [FotoComponent, FiltroPorTitulo, FotoService],
  providers: [FotoService]
})
export class FotoModule { }