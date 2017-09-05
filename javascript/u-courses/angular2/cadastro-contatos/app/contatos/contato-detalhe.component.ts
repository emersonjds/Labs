import { ContatoService } from './contato.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',
    styles: [`
        .ng-invalid[required] {
            border: 1px solid red;
        }
        .ng-valid {
            border: 1px solid green;
        }
    `]
})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        console.log('On init') //chamado logo que o component é construido no browser

        this.contato = new Contato(0, '', '', ''); //life cicle hook

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'] // o valor de mais converte implicitamente a string em number

            if(id) {
                this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    this.contato = contato;
                })
            }
            
        });
    }

    teste() {
        console.log(this.contato)
    }

}