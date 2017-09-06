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

    getFormGroupClass(isValid: boolean, isPristine: boolean ): Object {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && isPristine
        }
    }
    getFormControlClass(isValid: boolean, isPristine: boolean ): Object {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && isPristine
        }
    }

    teste() {
        console.log(this.contato)
    }

}