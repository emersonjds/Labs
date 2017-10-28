import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: [
        './products-list.component.css'
    ]
})
export class ProductsListComponent {
    pageTitle: string = 'Product List';
}