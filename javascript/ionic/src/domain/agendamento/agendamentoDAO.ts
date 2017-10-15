import { Injectable } from '@angular/core';
import { Agendamento } from './agendamento';
import { Storage } from '@ionic/storage';


@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage) { }

    private _getKey(agendamento: Agendamento) {
        return agendamento.email + agendamento.data.substr(0, 10);
    }

    salva(agendamento: Agendamento) {
        return this._storage.set(this._getKey(agendamento), agendamento);
    }

}