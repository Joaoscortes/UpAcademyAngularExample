import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Product } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private apiUrl = 'http://localhost:8080/stockmanagement/api/products/';

  constructor(
    private http: HttpClient,
  ) { }

  public getAll() {
    // Request to Jax-rs Api
    return this.http.get(this.apiUrl);

    // Simulate data
    // const data: ReplaySubject<any> = new ReplaySubject(1);
    // data.next([
    //   {
    //     'id': 1,
    //     'name': 'Atum',
    //     'pvp': 12,
    //     'iva': 23,
    //     'discountValue': 0
    //   }, {
    //     'id': 2,
    //     'name': 'Bananas',
    //     'pvp': 12,
    //     'iva': 13,
    //     'discountValue': 0
    //   }, {
    //     'id': 3,
    //     'name': 'Batatas',
    //     'pvp': 12,
    //     'iva': 13,
    //     'discountValue': 0
    //   }, {
    //     'id': 4,
    //     'name': 'Cebolas',
    //     'pvp': 12,
    //     'iva': 13,
    //     'discountValue': 0
    //   }
    // ]);
    // return data;
  }

  public create(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  public get(id: number) {
    return this.http.get(this.apiUrl + id);
  }

  public update(product: Product) {
    return this.http.put(this.apiUrl, product);
  }

  public delete(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
