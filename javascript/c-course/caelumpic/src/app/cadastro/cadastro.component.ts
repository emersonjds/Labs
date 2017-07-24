import { FotoService } from './../foto/foto.service';
import { Http, HttpModule, Headers } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";  //chamada para acesso a açoes de rota

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  service: FotoService;
  meuForm: FormGroup;
  route: ActivatedRoute;	//	nova	propriedade
  mensagem: string = '';	//	nova	propriedade
  router: Router

  constructor(
    private formBuilder: FormBuilder,
    private _fotoService: FotoService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {

    this.route = _route;
    this.service = _fotoService;
    this.router = _router;

    this.meuForm = formBuilder.group({
      titulo: [''],
      url: [''],
      descricao: ['']
    })
    //chamada para verificar parametros vindos na rota
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
        this._router.navigate(['']) //roteamento para home apos inclusao da foto
        console.log('Foto Salva com sucesso')
      }, error => {
        console.log(error)
      })
  }

  cadastra() {
    this._fotoService.cadastrar(this.foto)
    .subscribe(res => {
      this.mensagem = res.mensagem;
      this.foto = new FotoComponent()
    }, erro => {
      console.log(erro)
      this.mensagem = 'Nao foi possivel salvar a foto'
    })
  }

}
