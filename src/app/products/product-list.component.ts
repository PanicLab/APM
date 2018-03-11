import {Component, OnInit} from '@angular/core';

import {Product} from './Product';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[];
  products: Product[];

  constructor(private _productService: ProductService) {
/*    this.listFilter = 'cart';*/
  }

  ngOnInit(): void {
/*    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;*/
    this._productService.getProducts()
                        .subscribe(products => {
                                      this.products = products;
                                      this.filteredProducts = this.products;
                        },
                            error => this.errorMessage = <any>error);

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filteredBy: string): Product[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
