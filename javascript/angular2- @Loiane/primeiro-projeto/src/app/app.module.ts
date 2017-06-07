import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
