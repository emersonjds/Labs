import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Contato } from './contato.model';
@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})

export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>

    private termosDaBusca: Subject<any> = new Subject<string>()

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit(): void {
        this.contatos = this.termosDaBusca.
            switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([])
        )
    }

    search(term: string): void {
        this.termosDaBusca.next(term)
    }
}