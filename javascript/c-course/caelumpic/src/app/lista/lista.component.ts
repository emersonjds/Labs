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

}
