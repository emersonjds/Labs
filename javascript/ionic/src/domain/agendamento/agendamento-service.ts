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

            // É através de this._storage.set que gravamos um objeto no banco. Precisamos passar um identificador único primeiro e depois os dados que queremos associar a este indentificador. No caso, usaremos como identificador a concatenação do e-mail do usuário com a data, mas apenas com o ano, mês e dia. O método set também retorna uma promise.
            .then(() => {
                let key = agendamento.email + agendamento.data.substr(0, 10);
                //o metodo set recebe sempre 2 parametros, chave e o objeto a ser enviado
                return this._storage.set(key, agendamento);
            })
            .then(() => agendamento.confirmado)
    }

}