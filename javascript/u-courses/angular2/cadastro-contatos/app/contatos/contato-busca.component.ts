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
        this.contatos = this.termosDaBusca
            .debounceTime(300) //aguardo 300ms para emitir novos eventos
            .distinctUntilChanged() // ignore o proximo termo de busca se for = ao anterior
            .switchMap(term => { //cancela os observables de pesquisa anterior sempre trazendo o resultado mais recente
                console.log('Fez a busca', term)
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([])
            }).catch(err => {
                console.log(err)
                return Observable.of<Contato[]>([])
            })
        this.contatos.subscribe((contatos: Contato[]) => {
            console.log('retornou do servidor', contatos)
        })
        
    }

    search(term: string): void {
        this.termosDaBusca.next(term) // adicionando entrada de dados a fila de eventos
    }
}