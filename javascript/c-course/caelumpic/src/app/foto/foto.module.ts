import { FotoService } from './foto.service';
import { FiltroPorTitulo } from './foto.pipe';
import { NgModule, Input } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
  declarations: [FotoComponent, FiltroPorTitulo],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [FotoService]
})
export class FotoModule {
  @Input() url;
  @Input() titulo;
}
