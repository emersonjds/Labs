import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPageComponent {
    public carro;
    public acessorios;
    private _precoTotal: number;

    constructor(public navParams: NavParams) {
        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;

        this.acessorios = [
            { nome: 'Freios ABS', preco: 800 },
            { nome: 'Ar Condicionado', preco: 300 },
            { nome: 'Banco de couro', preco: 300 },
            { nome: 'Teto Solar', preco: 600 },
            { nome: 'MP3 Player', preco: 300 }
        ]
    }

    get precoTotal() { //getter 
        return this._precoTotal;
    }

    atualizaTotal(ativo: boolean, acessorio) {
        ativo ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
    }

} 