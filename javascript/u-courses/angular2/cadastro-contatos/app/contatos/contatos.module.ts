import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContatoRouteModule } from './contato-routing.module';
import { ContatoListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        ContatoRouteModule
    ],
    declarations: [
        ContatoListaComponent,
        ContatoDetalheComponent
    ],
    exports: [
        ContatoListaComponent
    ]
})
export class ContatosModule {} 