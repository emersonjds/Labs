import { IProduct } from './products';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
    private _router: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit() {
    let id = +this._router.snapshot.paramMap.get('id');
    // this._router.params -> Observable<any></any>

    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "price": 19.85,
      "description": "Leaf rake with 48-inch wooden handle",
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake_png"
    }
  }

  back(): void {
    this._route.navigate(['/products']);
  }

}
