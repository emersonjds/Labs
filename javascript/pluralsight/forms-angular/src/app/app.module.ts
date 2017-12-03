import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormService } from '../services/form-post.service';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
