import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'

const appRoutes: Routes = [
  { path: '', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listagem', component: ListagemComponent }
]

//modulo que compila as rotas para que o angular entenda 
export const routing = RouterModule.forRoot(appRoutes)