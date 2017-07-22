import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';
import { Http } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() titulo;
  @Input() url;
  fotos: Object[] = []
  mensagem: string = '';

  constructor(http: Http, private _fotoService: FotoService) {
    var that = this;
    /*http.get('http://localhost:3000/v1/fotos')
      .map(res => res.json())
      .subscribe(
      fotos => this.fotos = fotos, //se ok
      erro => console.log(erro) // se nao ok
      )*/

    this._fotoService.listar()
      .subscribe(
      fotos => this.fotos = fotos,
      error => console.log(error)
      )

  }

  ngOnInit() {
  }

  remover(foto: FotoComponent): void {
    this._fotoService.remover(foto)
      .subscribe(
      fotos => {
        let novasFotos = this.fotos.slice(0);
        let indice = novasFotos.indexOf(foto);
        novasFotos.splice(indice, 1);
        this.fotos = novasFotos;
        this.mensagem = 'Foto	removida	com	sucesso';

        setTimeout(() => {
          this.mensagem = '';
        }, 2000)
      },
      erro => {
        console.log(erro)
        this.mensagem = 'Não	foi	possível	remover	a	foto';
      });
  }

}
