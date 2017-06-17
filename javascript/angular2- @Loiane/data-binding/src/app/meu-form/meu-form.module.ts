import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule //chamada do modulo interno para que o componente possa enxergar form properties
  ],
  declarations: [MeuFormComponent],
  exports: [MeuFormComponent]  //expor esse modulo para poder ser utilizado externamente
})
export class MeuFormModule { }
