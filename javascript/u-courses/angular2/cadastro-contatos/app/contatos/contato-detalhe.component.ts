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
    private isNew: boolean = true;

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

            if (id) {

                this.isNew = false;

                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    })
            }

        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): Object {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        }
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): Object {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        }
    }

    teste() {
        console.log(this.contato)
    }

    onSubmit(): void {
        let promise;

        if (this.isNew) {
            promise = this.contatoService.create(this.contato);
        } else {
            promise = this.contatoService.update(this.contato)
        }

        promise.then(contato => this.location.back())

        // this.isNew ? console.log('cadastrar novo contato') : console.log('alterar contato')
    }

}