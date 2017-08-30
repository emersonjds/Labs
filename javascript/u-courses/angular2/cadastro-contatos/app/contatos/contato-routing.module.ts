import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';


const contatoRoutes: Routes = [
    { path: 'contato', component: ContatoListaComponent },
    { path: 'contato/save', component: ContatoDetalheComponent },
    { path: 'contato/save/:id', component: ContatoDetalheComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [
        RouterModule //invoked for use in self module 
    ]
})
export class ContatoRouteModule { }