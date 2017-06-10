import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo],
    exports: [ FotoComponent, FiltroPorTitulo ],
    providers: [ FotoService ]
})
export class FotoModule { }