import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public getProducts() {
    // Request to Jax-rs Api
    // return this.http.get('http://localhost:8080/stockManagement/stock/products/');

    // Simulate data
    const data: ReplaySubject<any> = new ReplaySubject(1);
    data.next([
      {
        'id': 1,
        'name': 'Atum',
        'pvp': 12,
        'iva': 23,
        'discountValue': 0
      }, {
        'id': 2,
        'name': 'Bananas',
        'pvp': 12,
        'iva': 13,
        'discountValue': 0
      }, {
        'id': 3,
        'name': 'Batatas',
        'pvp': 12,
        'iva': 13,
        'discountValue': 0
      }, {
        'id': 4,
        'name': 'Cebolas',
        'pvp': 12,
        'iva': 13,
        'discountValue': 0
      }
    ]);
    return data;
  }
}
