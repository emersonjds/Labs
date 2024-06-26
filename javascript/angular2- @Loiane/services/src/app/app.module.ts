import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CursoModule } from './cursos/curso.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogService } from './shared/log.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  CriarCursoModule,
  CursoModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
