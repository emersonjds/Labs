import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { ContatosModule } from './contatos/contatos.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRouteModule,
    ContatosModule
     ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }