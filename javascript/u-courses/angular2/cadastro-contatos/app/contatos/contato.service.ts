import { Injectable } from "@angular/core";

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService {

    getContatos(): Promise<Contato[]>{
        return new Promise((resolve, reject) => {
            resolve(CONTATOS)  
        }) 
    }

}