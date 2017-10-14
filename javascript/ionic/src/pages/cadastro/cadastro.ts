import { Carro } from './../../domain/carro/carro';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Http } from '@angular/http';

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
  private _alerta: Alert

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private alertCtrl: AlertController) {
    this.carro = navParams.get('carro')
    this.precoTotal = navParams.get('precoTotal')

    this._alerta = this.alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok' }]
    })
  }

  agenda() {
    let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${this.carro.nome}&nome=${this.nome}&preco=${this.precoTotal}&endereco=${this.endereco}&email=${this.email}&dataAgendamento=${this.date}`;
    this._http
      .get(api)
      .toPromise()
      .then(() => {
        this._alerta.setSubTitle('Agendamento realizado com sucesso');
        this._alerta.present();
      })
      .catch(err => {
        this._alerta.setSubTitle('Nao foi possivel realizar o agendamento, tente mais tarde');
        this._alerta.present();
      })
  }

}
