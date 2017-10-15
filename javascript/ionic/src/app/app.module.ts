import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPageComponent } from './../pages/escolha/escolha';
import { CadastroPage } from './../pages/cadastro/cadastro';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AgendamentoService } from './../domain/agendamento/agendamento-service';

//O Ionic possui um serviço padrão chamado Storage. Ele é uma casquinha sobre o LocalForage, um wrapper para diversos bancos do mercado.

import { Storage } from '@ionic/storage';

function provideStorage() {
  return new Storage(['indexeddb'], { 
    name: 'aluracar',
    storeName: 'agendamentos'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EscolhaPageComponent,
    CadastroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPageComponent,
    CadastroPage
  ],
  providers: [
    AgendamentoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Storage, useFactory: provideStorage }
  ]
})
export class AppModule { }



