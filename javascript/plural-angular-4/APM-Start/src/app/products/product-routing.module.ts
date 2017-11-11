import { ProductService } from './products.service';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsListComponent } from './products-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      }
    ])
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
