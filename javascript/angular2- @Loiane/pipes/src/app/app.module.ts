import { SettingsService } from './settings.service';

import { PipeExamplesComponent } from './pipe-examples/pipe-example.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipeExamplesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => {
        settingsService.getLocale()
      }
    }
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
