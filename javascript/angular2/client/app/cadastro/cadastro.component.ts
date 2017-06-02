import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoService } from '../foto/foto.service'

@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent()
  meuForm: FormGroup
  service: FotoService

  constructor(service: FotoService, fb: FormBuilder) {
    this.service = service
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

    this.service.cadastra(this.foto)
      .subscribe(() => { //retorno de dados da Service
        this.foto = new FotoComponent() // chamada de uma nova instancia
        console.log('Foto Cadastrada com sucesso')
      }, erro => {
        console.log(erro)
      })
  }

} 