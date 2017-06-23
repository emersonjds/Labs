import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  meuFavorito: boolean = false


  mudarStatus() {
    this.meuFavorito = !this.meuFavorito
  }
  constructor() { }

  ngOnInit() {
  }

}
