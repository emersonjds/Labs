import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers } from '@angular/http'

@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent()
  http: Http

  constructor(http: Http) {
    this.http = http
  }


  cadastrar(event) {
    event.preventDefault()
    console.log(this.foto)

    let headers = new Headers()
    headers.append('Content-type', 'application/json')

    this.http.post('v1/fotos', this.foto, { headers: headers })
      .subscribe(() => { //se os dados forem enviados com sucesso
        console.log('Dados salvos com sucesso')
      }, erro => console.log(erro))

  }

} 