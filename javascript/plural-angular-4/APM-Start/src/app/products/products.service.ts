import { HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IProduct } from "./products";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private _productUrl = '../../api/products/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl);
  }
}
