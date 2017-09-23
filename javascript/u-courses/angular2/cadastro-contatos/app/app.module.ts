
import './utils/rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //emulate an api
import { InMemoryDataService } from './in-memory-data.service';
import { DialogService } from './dialog.service';

import { AppComponent } from './app.component';

import { ContatosModule } from './contatos/contatos.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouteModule,
    ContatosModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    DialogService
  ]
})
export class AppModule { }