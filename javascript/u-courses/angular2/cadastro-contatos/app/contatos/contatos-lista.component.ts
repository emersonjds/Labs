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

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.contatoService.getContatosSlowly()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(error => {
                console.log('Houve um erro ', error)
            })
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.contatoService.delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter(( _ : Contato) => _.id != contato.id)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
    }

}