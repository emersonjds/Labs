import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';


const contatoRoutes: Routes = [
    { path: 'contato', component: ContatoListaComponent },
    { path: 'contato/save', component: ContatoDetalheComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ]
})
export class ContatoRouteModule { }