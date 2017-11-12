import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeachBoxDirective } from './seach-box.directive';
import { SalesDataService } from './sales-data.service';
import { InitCapsPipe } from './shared/init-caps.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SeachBoxDirective,
    InitCapsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
