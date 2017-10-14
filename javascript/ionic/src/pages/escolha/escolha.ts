import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular'
import { Carro } from './../../domain/carro/carro';
import { Acessorio } from './../../domain/carro/acessorio';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPageComponent {
    public carro: Carro;
    public acessorios: Acessorio[];
    private _precoTotal: number;

    constructor(public navParams: NavParams, public navCtrl: NavController) {
        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;

        this.acessorios = [
            new Acessorio('Freios ABS', 800),
            new Acessorio('Ar Condicionado', 300),
            // new Acessorio('Banco de couro', 300),
            // new Acessorio('Teto Solar', 600),
            // new Acessorio('MP3 Player', 300)
        ]
    }

    get precoTotal() { //getter 
        return this._precoTotal;
    }

    atualizaTotal(ativo: boolean, acessorio: Acessorio) {
        ativo ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
    }

    avancaAgendamento() {
        this.navCtrl.push(CadastroPage, {
            carro : this.carro,
            precoTotal : this._precoTotal
        })
    }
} 