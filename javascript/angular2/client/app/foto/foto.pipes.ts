import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filtroPorTitulo',
})
export class FiltroPorTitulo implements PipeTransform{
  
  transform(fotos, digitado) {
    digitado = digitado.toLowerCase()
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado))
    //includes == contem
  }

}