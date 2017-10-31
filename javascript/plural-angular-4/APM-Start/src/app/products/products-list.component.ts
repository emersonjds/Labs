import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/products';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: [
        './products-list.component.css'
    ]
})
export class ProductsListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImage: boolean = false;
    productFiltered: string = 'cart';

    _listFilter: string;

    //ggas
    get listFilter() {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [
        {
            "productId": 2,
            "productName": 'Garden Cart',
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 galoon capacity",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/balloon.png"
        },
        {
            "productId": 3,
            "productName": 'Bic Pen',
            "productCode": "BIC-0023",
            "releaseDate": "March 01, 2016",
            "description": "1 capacity",
            "price": 2.00,
            "starRating": 4.9,
            "imageUrl": "https://www.pascogifts.com/files/cache/square/files/migrated-bic-attriant-d0d8.jpg"
        }
    ]

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase(); //code starts by converting the filter criteria to lowercase.
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    

    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('START ON INIT')
    }
}