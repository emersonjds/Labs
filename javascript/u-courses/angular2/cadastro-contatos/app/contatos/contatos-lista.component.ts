import { DialogService } from './../dialog.service';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: './contato-lista.component.html'
})
export class ContatoListaComponent implements OnInit {

    private contatos;
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;


    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.contatoService.getContatosSlowly()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(error => {
                this.mostraMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de contatos'
                })
            })
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.contatoService.delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter((_: Contato) => _.id != contato.id)

                            this.mostraMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado'
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            this.mostraMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar o contato'
                            })
                        })
                }
            })
    }

    private mostraMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout)
            }
            this.currentTimeout = setTimeout(() => {
                this.mensagem = {};
            }, 3000);
        }

    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        }

        this.classesCss['alert-' + tipo] = true;
    }

}