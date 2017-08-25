import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContatoRouteModule } from './contato-routing.module';
import { ContatoListaComponent } from './contatos-lista.component';
import { DetalheContato } from './contato-detalhe.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ContatoListaComponent, DetalheContato],
    exports: [ContatoListaComponent, DetalheContato]
})
export class ContatosModule { }