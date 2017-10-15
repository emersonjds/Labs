import { AgendamentoService } from './../../domain/agendamento/agendamento-service';
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
    private alertCtrl: AlertController,
    private _agendamentoService: AgendamentoService) {
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
    if (!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email) {
      this.alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Voce deve preencher todas as informações',
        buttons: [{
          text: 'Ok'
        }]
      }).present();
      return;
    }

    this._agendamentoService.agenda(this.agendamento)
      .then((confirmado) => {
        confirmado ?
          this._alerta.setSubTitle('Agendamento realizado com sucesso') :
          this._alerta.setSubTitle('Nao foi possivel realizar o agendamento, tente mais tarde');
        this._alerta.present();
      }).catch(err => {
        console.log(err);
        this._alerta.setSubTitle(err.message);
        this._alerta.present();
      })
  }

}
