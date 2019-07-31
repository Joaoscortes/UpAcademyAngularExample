import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { ProductApiService } from '../product/product-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products$: ReplaySubject<any[]> = new ReplaySubject(1);
  private products: any[];

  constructor(
    private productApi: ProductApiService
  ) {
    // this.products$.subscribe((a) => console.log('products$ on DataService', JSON.stringify(a)));
    this.updateProducts();
  }

  public updateProducts() {
    this.productApi.getAll().subscribe(
      (res: any) => {
        this.products = res;
        this.products$.next(res);
      }
    );
  }

  public getProductById(id) {
    for (const product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
  }
}
