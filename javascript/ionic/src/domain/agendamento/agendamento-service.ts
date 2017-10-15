import { Http } from '@angular/http';
import { Injectable } from '@angular/core'

import { Agendamento } from './agendamento';
import { Storage } from '@ionic/storage';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http, private _storage: Storage) { }

    agenda(agendamento: Agendamento) {
        let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;

        return this._http
            .get(api)
            .toPromise()
            .then(() => agendamento.confirmado == true, err => console.log(err))
    }
}