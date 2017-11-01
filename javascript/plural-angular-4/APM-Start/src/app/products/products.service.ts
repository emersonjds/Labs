import { HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from "./products";

@Injectable()
export class ProductService {
  private _productUrl = '../../api/products/products.json';

  constructor(private _http: Http) { }

  getProducts(): Observable<any> {
    return this._http.get(this._productUrl)
      .do(data => console.log('All' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);

  }

}
