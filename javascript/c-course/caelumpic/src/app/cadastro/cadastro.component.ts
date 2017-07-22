import { FotoService } from './../foto/foto.service';
import { Http, HttpModule, Headers } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  service: FotoService
  meuForm: FormGroup;
  route: ActivatedRoute;	//	nova	propriedade
  mensagem: string = '';	//	nova	propriedade

  constructor(private formBuilder: FormBuilder, private _fotoService: FotoService, private _route: ActivatedRoute) {

    this.route = _route;
    this.service = _fotoService;

    this.meuForm = formBuilder.group({
      titulo: [''],
      url: [''],
      descricao: ['']
    })

    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.obterFoto(id)
          .subscribe(
          foto => this.foto = foto,
          erro => console.log(erro));
      }
    });
  }

  ngOnInit() { }

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
