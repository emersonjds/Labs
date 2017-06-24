import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  ativo: boolean = false
  tamanhoDaFante: number = 10

  constructor() { }

  ngOnInit() {
  }

  mudarAtivo() {
    this.ativo = !this.ativo
  }

}
