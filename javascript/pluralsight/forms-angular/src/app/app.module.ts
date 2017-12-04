
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormService } from '../services/form-post.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NG2Component } from './components/ng2-forms';
import { DatepickerModule } from 'ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [AppComponent, FormComponent, NG2Component],
  imports: [BrowserModule,
    FormsModule, HttpModule,
    RouterModule, DatepickerModule,
    BsDatepickerModule, TimepickerModule, ButtonsModule],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
