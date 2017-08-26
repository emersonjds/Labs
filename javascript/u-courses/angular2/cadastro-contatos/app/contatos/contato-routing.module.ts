import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheContato } from './contato-detalhe.component';
import { ContatoListaComponent } from './contatos-lista.component';

const contatoRoutes: Routes = [
    { path: '/contato', component: ContatoListaComponent },
    { path: '/contato/save', component: DetalheContato },
]

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ]
})
export class ContatoRouteModule { }