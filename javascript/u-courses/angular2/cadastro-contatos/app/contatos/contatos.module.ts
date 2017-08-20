import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ContatoListaComponent } from './contatos-lista.component';


@NgModule({
    imports:[CommonModule],
    declarations: [ContatoListaComponent],
    exports: [ContatoListaComponent]
})
export class ContatosModule {

}