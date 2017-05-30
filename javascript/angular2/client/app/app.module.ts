import 'rxjs/add/operator/map' //import extensao map

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FotoModule } from './foto/foto.module'
import { HttpModule } from '@angular/http' //provider Http

@NgModule({
  imports: [BrowserModule, FotoModule, HttpModule], // modulos que podem ser exportados
  declarations: [AppComponent], // modulos que podem ser usados neste novo modulo
  bootstrap: [AppComponent] //chamada inicial da aplicação
})

export class AppModule {

}

