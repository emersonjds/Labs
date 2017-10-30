import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductsListComponent } from './products/products-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
