import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContatosModule } from './contatos/contatos.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ContatosModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }