import { ProductService } from './products.service';
import { IProduct } from './products';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() rating: number = 4;
  pageTitle: string = 'Product Detail';
  product: IProduct;
  products: IProduct[] = [];

  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    let id = +this._router.snapshot.paramMap.get('id');
    // this._router.params -> Observable<any></any>

    this.pageTitle += `: ${id}`;

    this._productService.getProducts().subscribe(products => {
      this.products = products;
      products.forEach(data => {
        if (data.productId == id) {
          return this.product = {
            "productId": id,
            "productName": data.productName,
            "productCode": data.productCode,
            "releaseDate": data.releaseDate,
            "price": data.price,
            "description": data.description,
            "starRating": data.starRating,
            "imageUrl": data.imageUrl
          }
        }
      })
    })

  }



  back(): void {
    this._route.navigate(['/products']);
  }



}
