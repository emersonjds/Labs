import { ContatoService } from './contato.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        console.log('On init') //chamado logo que o component é construido no browser
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'] // o valor de mais converte implicitamente a string em number

        this.contatoService.getContato(id)
            .then((contato: Contato) => {
                console.log(contato);
            })
        });


    }

}