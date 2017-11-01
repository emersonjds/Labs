import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient} from '@angular/common/http';


import { ProductService } from './products/products.service';
import { StarComponent } from './shared/start.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductsListComponent } from './products/products-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Http,
    HttpClient
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
