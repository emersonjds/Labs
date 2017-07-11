import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Caelumpic";
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
}
