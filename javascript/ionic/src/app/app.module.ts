
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPageComponent } from './../pages/escolha/escolha';
import { CadastroPage } from './../pages/cadastro/cadastro';

import { HttpModule } from '@angular/http';
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
    HttpModule,
    BrowserModule,
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
    StatusBar,
    SplashScreen,
    AgendamentoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Storage, useFactory: provideStorage }
  ]
})
export class AppModule { }
