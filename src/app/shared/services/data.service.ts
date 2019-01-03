import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { ProductApiService } from './product-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products$: ReplaySubject<any[]> = new ReplaySubject(1);
  private products: any[];

  constructor(
    private productApi: ProductApiService
  ) {
    this.updateProducts();
  }

  public updateProducts() {
    this.productApi.getProducts().subscribe(
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
