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
const dialog_service_1 = require("./../dialog.service");
const contato_service_1 = require("./contato.service");
const core_1 = require("@angular/core");
let ContatoListaComponent = class ContatoListaComponent {
    constructor(contatoService, dialogService) {
        this.contatoService = contatoService;
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.contatoService.getContatosSlowly()
            .then((contatos) => {
            this.contatos = contatos;
        }).catch(error => {
            this.mostraMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de contatos'
            });
        });
    }
    onDelete(contato) {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + ' ?')
            .then((canDelete) => {
            if (canDelete) {
                this.contatoService.delete(contato)
                    .then(() => {
                    this.contatos = this.contatos.filter((_) => _.id != contato.id);
                    this.mostraMensagem({
                        tipo: 'success',
                        texto: 'Contato deletado'
                    });
                })
                    .catch(err => {
                    console.log(err);
                    this.mostraMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar o contato'
                    });
                });
            }
        });
    }
    mostraMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        setTimeout(() => {
            this.mensagem = undefined;
        }, 3000);
    }
    montarClasses(tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
};
ContatoListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contatos-lista',
        templateUrl: './contato-lista.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        dialog_service_1.DialogService])
], ContatoListaComponent);
exports.ContatoListaComponent = ContatoListaComponent;
