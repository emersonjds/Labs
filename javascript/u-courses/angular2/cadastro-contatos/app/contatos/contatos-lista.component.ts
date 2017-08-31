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

    constructor(private contatoService: ContatoService) { }

    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch((err) => console.log(err))
    }

}