import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPageComponent {
    public carro;
    public acessorios;

    constructor(public navParams: NavParams) {
        this.carro = this.navParams.get('carroSelecionado');
        this.acessorios = [
            { nome: 'Freios ABS', preco: 800 },
            { nome: 'Ar Condicionado', preco: 300 },
            { nome: 'Banco de couro', preco: 300 },
            { nome: 'Teto Solar', preco: 600 }
        ]
    }
} 