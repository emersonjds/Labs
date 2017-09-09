import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let contatos: Contato[] = [
            { id: 1, nome: 'Maria Silva', email: 'm.silva@email.com', telefone: '00 0000-0000' },
            { id: 2, nome: 'Jose Silva', email: 'j.silva@email.com', telefone: '00 0000-0000' },
            { id: 3, nome: 'Reginaldo Lopes', email: 'reginaldo@email.com', telefone: '00 0000-0000' },
            { id: 4, nome: 'Ricardo Ledo', email: 'r.ledo@email.com', telefone: '00 0000-0000' },
            { id: 5, nome: 'Claudio Comporte', email: 'c.comporte@email.com', telefone: '00 0000-0000' }
        ];

        return { contatos }
    }
}