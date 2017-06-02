import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent()
  http: Http
  meuForm: FormGroup

  constructor(http: Http, fb: FormBuilder) {
    this.http = http
    this.meuForm = fb.group({
      //compor as validaçòes
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])], //setando a opção para se tornar obrigatória
      url: ['', Validators.required],
      descricao: ['']
    })
  }


  cadastrar(event) {
    event.preventDefault()
    console.log(this.foto)

    let headers = new Headers()
    headers.append('Content-type', 'application/json')

    this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
      .subscribe(() => { //se os dados forem enviados com sucesso

        this.foto = new FotoComponent() // nova instancia apos salvar os dados

        console.log('Dados salvos com sucesso')
      }, erro => console.log(erro))

  }

} 