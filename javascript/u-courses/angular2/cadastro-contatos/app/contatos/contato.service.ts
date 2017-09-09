import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContatoService {

    private url: string = 'app/contatos';
    //contato = retorno da web api
    //app = caminho relativo a raiz da api simulada que foi importada no modulo principal

    private headers: Headers = new Headers({ 'Content-type': 'application/json' })

    constructor(
        private http: Http
    ) { }

    getContatos(): Promise<Contato[]> {
        return this.http.get(this.url)
            .toPromise() // conversao de Observable para Promise
            .then(res => res.json().data as Contato[])
            .catch(this.handleError);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find((contato) => contato.id === id))
    }

    create(contato: Contato): Promise<Contato> {

        return this.http.post(this.url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Contato)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('Erro ', error)
        return Promise.reject(error.message || error)
    }

    getContatosSlowly(): Promise<Contato[]> {
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
                return this.getContatos();
            })
    }
}

//Build => Measure => Learn