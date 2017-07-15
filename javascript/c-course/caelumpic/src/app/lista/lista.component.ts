import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  fotos: Object[] = []

  constructor(http: Http) {
    var that = this;
    http.get('http://localhost:3000/v1/fotos')
      .map(res => res.json())
      .subscribe(
      fotos => this.fotos = fotos, //se ok
      erro => console.log(erro) // se nao ok
      )
  }

  ngOnInit() {
  }

}
