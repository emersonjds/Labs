"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const contatos_mock_1 = require("./contatos-mock");
let ContatoService = class ContatoService {
    getContatos() {
        return new Promise((resolve, reject) => {
            resolve(contatos_mock_1.CONTATOS);
        });
    }
    getContato(id) {
        return this.getContatos()
            .then((contatos) => {
            return contatos.find((contato) => {
                return contato.id === id;
            });
        });
    }
    getContatosSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
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
                }, 3000);
            });
        })
            .then(() => {
            console.log('End Promise Chain');
            return this.getContatos();
        });
    }
};
ContatoService = __decorate([
    core_1.Injectable()
], ContatoService);
exports.ContatoService = ContatoService;
//Build => Measure => Learn 
