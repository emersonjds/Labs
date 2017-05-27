import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule], // modulos que podem ser exportados
  declarations: [AppComponent], // modulos que podem ser usados neste novo modulo
  bootstrap: [AppComponent] //chamada inicial da aplicação
})

export class AppModule {

}