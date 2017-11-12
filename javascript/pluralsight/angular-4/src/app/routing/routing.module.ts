import { WelcomeComponent } from './../home/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([ // chamada de rotas para o modulo principal da aplicação
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, //caminho default da aplicação
      { path: '**', redirectTo: '/welcome', pathMatch: 'full' }, //caso alguma pagina nao seja encontrada chamamos este operador curinga
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
