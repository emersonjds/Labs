import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ProductService } from './products.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsListComponent } from './products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
