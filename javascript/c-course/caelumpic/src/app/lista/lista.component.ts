import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  fotos: FotoComponent[] = []
  fotoService: FotoService
  mensagem: string = ''

  constructor(private _service: FotoService) {
    this.fotoService = _service

    this.fotoService.listar()
      .subscribe(
      fotos => this.fotos = fotos,
      error => console.log = error
      )
  }

  ngOnInit() {}

  remover(foto: FotoComponent): void {
    this.fotoService.remover(foto)
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
