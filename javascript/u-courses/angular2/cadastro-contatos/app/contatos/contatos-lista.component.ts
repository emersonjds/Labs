import { Component } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contato-lista.component.html'
})
export class ContatoListaComponent {
    contatos: Contato[] = CONTATOS;
}