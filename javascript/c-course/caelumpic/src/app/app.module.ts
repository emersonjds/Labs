import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { PanelModule } from './panel/panel.module';
import { PanelComponent } from './panel/panel.component';
import { FotoModule } from './foto/foto.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PanelModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
