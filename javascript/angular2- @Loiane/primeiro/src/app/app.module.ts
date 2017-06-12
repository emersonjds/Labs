import { CursosModule } from './cursos/cursos.module';

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FirstComponent } from './first-component/first-component'
import { SecondComponentComponent } from './second-component/second-component.component'


@NgModule({
  declarations: [ //listar todos os componentes, diretivas e pipes
    AppComponent,
    FirstComponent,
    SecondComponentComponent
  ],
  imports: [ // Outros modulos que podem ser utilizados nesse ou em outro componente pertencente a este modulo
    BrowserModule,
    CursosModule
  ],
  providers: [], //serviços que ficam disponiveis pra todos os components
  bootstrap: [AppComponent]
})
export class AppModule { }
