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
    imgWidth: number = 50;
    imgMargin: number = 2;
    products: any[] = [
        {
            "productId": 2,
            "productName": 'Garden Cart',
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 galoon capacity",
            "price": 32.99,
            "starRating": 4.2,
            "imgUrl": "Not Found"
        },
        {
            "productId": 3,
            "productName": 'Bic Pen',
            "productCode": "BIC-0023",
            "releaseDate": "March 01, 2016",
            "description": "1 capacity",
            "price": 2.00,
            "starRating": 4.9,
            "imgUrl": "Not Found"
        }
    ]
}