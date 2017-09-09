"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let ContatoService = class ContatoService {
    constructor(http) {
        this.http = http;
        this.url = 'app/contatos';
        //contato = retorno da web api
        //app = caminho relativo a raiz da api simulada que foi importada no modulo principal
        this.headers = new http_1.Headers({ 'Content-type': 'application/json' });
    }
    getContatos() {
        return this.http.get(this.url)
            .toPromise() // conversao de Observable para Promise
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    getContato(id) {
        return this.getContatos()
            .then((contatos) => contatos.find((contato) => contato.id === id));
    }
    create(contato) {
        return this.http
            .post(this.url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    update(contato) {
        const url = `${this.url}/${contato.id}`; //app/contatos/id
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato)
            .catch(this.handleError);
    }
    handleError(error) {
        console.log('Erro ', error);
        return Promise.reject(error.message || error);
    }
    getContatosSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
            .then(() => {
            console.log('Start');
            return 'start Promise Chain';
        })
            .then((param) => {
            console.log('Start');
            console.log('Second call');
            return new Promise((resolveInterPromise, reject) => {
                setTimeout(() => {
                    console.log('Intern Promise call');
                    resolveInterPromise();
                }, 1000);
            });
        })
            .then(() => {
            console.log('End Promise Chain');
            return this.getContatos();
        });
    }
};
ContatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContatoService);
exports.ContatoService = ContatoService;
//Build => Measure => Learn 
