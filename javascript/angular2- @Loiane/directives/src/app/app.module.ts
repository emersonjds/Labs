import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { YellowBgDirective } from './shared/yellow-bg.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';


@NgModule({
  declarations: [
    AppComponent,
    NgifDirectiveComponent,
    NgifDirectiveComponent,
    NgSwitchCaseComponent,
    NgForDirectiveComponent,
    NgClassComponent,
    NgStyleComponent,
    ElvisOperatorComponent,
    ExemploNgContentComponent,
    YellowBgDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective
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
