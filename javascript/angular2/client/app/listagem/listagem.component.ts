import { Component } from '@angular/core'
import { Http } from '@angular/http'
import { FotoComponent } from '../foto/foto.component'
import { FotoService } from '../foto/foto.service'

@Component({
  moduleId: module.id,
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})

export class ListagemComponent {
  fotos: FotoComponent[] = []
  service: FotoService

  constructor(service: FotoService) {
    this.service = service
    this.service.lista()
      .subscribe(
      fotos => this.fotos = fotos,
      erro => console.log(erro)
      )
  }

  remove(foto: FotoComponent): void {
    this.service.remove(foto)
      .subscribe(() => {
        let indiceFoto = this.fotos.indexOf(foto)
        this.fotos.slice(indiceFoto, 1)
        console.log('Foto deletada com sucesso')
      }, erro => console.log('Houve um erro inesperado'))
  }
}