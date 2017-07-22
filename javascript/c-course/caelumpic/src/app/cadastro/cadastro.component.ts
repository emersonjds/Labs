import { FotoService } from './../foto/foto.service';
import { Http, HttpModule, Headers } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  http: Http;
  meuForm: FormGroup

  constructor(private _http: Http, formBuilder: FormBuilder, private _fotoService: FotoService) {
    this.http = _http;
    this.meuForm = formBuilder.group({
      titulo: [''],
      url: [''],
      descricao: ['']
    })
  }

  ngOnInit() { }

  /*cadastrar($event: Event) {
    var cabecalho: Headers = new Headers();
    $event.preventDefault();

    cabecalho.append('Content-type', 'application/json');

    this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto),
      { headers: cabecalho }
    ).subscribe(
      response => console.log('Salvou'),
      error => console.log(error)
      )

    console.log(this.foto)
  }*/

  cadastrar(event) {
    event.preventDefault()
    console.log(this.foto)

    this._fotoService.cadastrar(this.foto)
      .subscribe(() => {
        this.foto = new FotoComponent()
        console.log('Foto Salva com sucesso')
      }, error => {
        console.log(error)
      })
  }

}
