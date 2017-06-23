import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';


@NgModule({
  declarations: [
    AppComponent,
    NgifDirectiveComponent,
    NgifDirectiveComponent,
    NgSwitchCaseComponent,
    NgForDirectiveComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
