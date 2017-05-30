import 'rxjs/add/operator/map' //import extensao map

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http' //provider Http
import { AppComponent } from './app.component'
import { FotoModule } from './foto/foto.module'
import { PainelModule } from './painel/painel.module'
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'


@NgModule({
  imports: [BrowserModule, FotoModule, PainelModule, HttpModule], // modulos que podem ser exportados
  declarations: [AppComponent, CadastroComponent, ListagemComponent], // modulos que podem ser usados neste novo modulo
  bootstrap: [AppComponent] //chamada inicial da aplicação
})

export class AppModule {

}

