import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { ContatosModule } from './contatos/contatos.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ContatosModule,
    AppRouteModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }