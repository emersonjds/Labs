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
  mensagem: string = ''

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
        let novasFotos = this.fotos.slice(0)
        let indiceFoto = novasFotos.indexOf(foto)
        novasFotos.splice(indiceFoto, 1)
        this.fotos = novasFotos
        this.mensagem = 'Foto removida com sucesso'
      }, erro => {
        console.log('Houve um erro inesperado')
        this.mensagem = 'Falha ao excluir a foto '
      })
  }
}