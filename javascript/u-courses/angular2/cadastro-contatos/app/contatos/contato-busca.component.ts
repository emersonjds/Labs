
import { ContatoService } from './contato.service';
import { Component, EventEmitter, OnInit, OnChanges, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/subject';
import { Contato } from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
            cursor-pointer:hover {
                cursor: pointer;
            }
        `]
})

export class ContatoBuscaComponent implements OnInit, OnChanges {

    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();

    contatos: Observable<Contato[]> //Observable de contatos
    private termosDaBusca: Subject<string> = new Subject<string>()

    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit(): void {

        this.contatos = this.termosDaBusca
            .debounceTime(500) //aguarde 500ms para emitir novos eventos
            .distinctUntilChanged() // se busca == busca anterior / ignore esta nova busca
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(e => {
                console.log(e.message)
                return Observable.of<Contato[]>([])
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca']
        this.search(busca.currentValue)
    }

    search(term: string): void {
        this.termosDaBusca.next(term) // adicionando entrada de dados a fila de eventos
        this.buscaChange.emit(term);
    }

    verDetalhe(contato: Contato): void {
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }

}