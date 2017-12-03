
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormService } from '../services/form-post.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
