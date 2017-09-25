import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { ServiceInterface } from './../interfaces/service.interface';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    private url: string = 'app/contatos';
    //contato = retorno da web api
    //app = caminho relativo a raiz da api simulada que foi importada no modulo principal

    private headers: Headers = new Headers({ 'Content-type': 'application/json' })

    constructor(
        private http: Http
    ) { }

    findAll(): Promise < Contato[] > {
        return this.http.get(this.url)
            .toPromise() // conversao de Observable para Promise
            .then(res => res.json().data as Contato[])
            .catch(this.handleError);
    }

    find(id: number): Promise < Contato > {
        return this.findAll()
            .then((contatos: Contato[]) => contatos.find((contato) => contato.id === id))
    }

    create(contato: Contato): Promise < Contato > {

        return this.http
            .post(this.url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Contato)
            .catch(this.handleError);
    }

    update(contato: Contato): Promise < Contato > {
        const url = `${this.url}/${contato.id}` //app/contatos/id
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError)
    }

    delete (contato: Contato): Promise < Contato > {
        const url = `${this.url}/${contato.id}` //app/contatos/id
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise < any > {
        console.log('Erro ', error)
        return Promise.reject(error.message || error)
    }

    getContatosSlowly(): Promise < Contato[] > {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
            .then(() => {
                console.log('Start')
                return 'start Promise Chain'
            })
            .then((param: string) => {
                console.log('Start')
                console.log('Second call')
                return new Promise((resolveInterPromise, reject) => {
                    setTimeout(() => {
                        console.log('Intern Promise call')
                        resolveInterPromise();
                    }, 1000)
                })
            })
            .then(() => {
                console.log('End Promise Chain')
                return this.findAll();
            })
    }

    search(term: string): Observable < Contato[] > {
        return this.http.get(`${this.url}/?nome=${term}`)
            .map((res: Response) => res.json().data as Contato[])
    }
}