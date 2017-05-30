import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filtroPorTitulo',
})
export class FiltroPorTitulo implements PipeTransform{
  
  transform(fotos, digitado) {
    console.log(fotos)
    console.log(digitado)
  }

}