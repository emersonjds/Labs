
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //emulate an api
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import { ContatosModule } from './contatos/contatos.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouteModule,
    ContatosModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }