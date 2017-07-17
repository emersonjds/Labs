
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';

const appRoutes: Routes = [
    { path: '', component: ListaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: '' } //caso a rota nao seja a utilizada
]

export const routing = RouterModule.forRoot(appRoutes);