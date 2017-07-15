import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor() { }

  ngOnInit() {
  }

  cadastrar(event: Event) {
    event.preventDefault();

    console.log(this.foto)
  }

}
