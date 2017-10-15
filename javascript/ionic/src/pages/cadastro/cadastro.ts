import { Agendamento } from './../../domain/agendamento/agendamento';
import { HomePage } from './../home/home';
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
  private _alerta: Alert;
  public agendamento: Agendamento;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private alertCtrl: AlertController) {
    this.carro = navParams.get('carro')
    this.precoTotal = navParams.get('precoTotal')

    this.agendamento = new Agendamento(this.carro, this.precoTotal);

    this._alerta = this.alertCtrl.create({
      title: 'Aviso',
      buttons: [{ // todo botao tem um handler
        text: 'Ok', handler: () => {
          this.navCtrl.setRoot(HomePage) // setando as rotas para raiz 
        }
      }]
    })
  }

  agenda() {
    let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${this.agendamento.carro.nome}&nome=${this.agendamento.nome}&preco=${this.agendamento.valor}&endereco=${this.agendamento.endereco}&email=${this.agendamento.email}&dataAgendamento=${this.agendamento.data}`;
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
