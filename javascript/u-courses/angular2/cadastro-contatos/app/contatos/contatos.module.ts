import { ContatoRouteModule } from './contato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContatoListaComponent } from './contatos-lista.component';

@NgModule({
    imports:[CommonModule, ContatoRouteModule],
    declarations: [ContatoListaComponent],
    exports: [ContatoListaComponent, ContatoRouteModule]
})
export class ContatosModule {

}