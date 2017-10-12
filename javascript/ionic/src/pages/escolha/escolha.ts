import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPageComponent {
    public carro;

    constructor(public navParams: NavParams) {
        this.carro = this.navParams.get('carroSelecionado');
    }
} 