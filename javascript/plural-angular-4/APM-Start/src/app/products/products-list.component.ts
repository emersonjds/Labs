import { ProductService } from './products.service';
import { Component, OnInit } from "@angular/core";
import { IProduct } from "../products/products";

@Component({
  selector: "pm-products",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
  pageTitle: string = "Product List";
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage: boolean = false;
  productFiltered: string = "cart";
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  _listFilter: string;

  //ggas
  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
//comment
  }

  //starts with initialize compontn
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts(); // retorno dos dados da lista para a variavel
    this.filteredProducts = this.products; // array recebendo esses dados
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); //code starts by converting the filter criteria to lowercase.
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toogleImage(): void {
    this.showImage = !this.showImage;
  }

  onNotify(message: string): void {
    console.log(message);
  }
}
