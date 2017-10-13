import { Carro } from './../../domain/carro/carro';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;
  public nome: string;
  public endereco: string;
  public email: string;
  public date: string = new Date().toISOString();// o componente devolve em formato de string a data

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = navParams.get('carro')
    this.precoTotal = navParams.get('precoTotal')
  }

  agenda() {
    console.log(this.nome)
    console.log(this.endereco)
    console.log(this.email)
    console.log(this.date)
  }

}
