import { NgModule } from '@angular/core'
import { FotoComponent } from './foto.component'
import { FiltroPorTitulo } from './foto.pipes'

@NgModule({
  declarations: [FotoComponent, FiltroPorTitulo], //o que o modulo tem
  exports: [FotoComponent, FiltroPorTitulo] // o que outros modulos podem usar
})
export class FotoModule {

}