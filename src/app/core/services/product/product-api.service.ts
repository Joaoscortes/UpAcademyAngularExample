import { environment } from '../../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { Product } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private apiUrl = 'http://localhost:8080/stockmanagement/api/products/';

  // GitPages Data
  private simulation: Array<any> = [
    {
      'id': 1,
      'name': 'Atum',
      'pvp': 12,
      'iva': 23,
      'discount': 0
    }, {
      'id': 2,
      'name': 'Bananas',
      'pvp': 12,
      'iva': 13,
      'discount': 0
    }, {
      'id': 3,
      'name': 'Batatas',
      'pvp': 12,
      'iva': 13,
      'discount': 0
    }, {
      'id': 4,
      'name': 'Cebolas',
      'pvp': 12,
      'iva': 13,
      'discount': 0
    }
  ];
  private simulationId = 5;

  constructor(
    private http: HttpClient,
  ) { }

  public getAll() {
    if (environment.production) {
      // Simulate data
      const data: ReplaySubject<any> = new ReplaySubject(1);
      data.next(this.simulation);
      return data;
    } else {
      // Request to Jax-rs Api
      return this.http.get(this.apiUrl);
    }
  }

  public create(product: Product) {
    if (environment.production) {
      // Simulate data
      product.id = this.simulationId++;
      this.simulation.push(product);
      const data: ReplaySubject<any> = new ReplaySubject(1);
      data.next({});
      return data;
    } else {
      // Request to Jax-rs Api
      return this.http.post(this.apiUrl, product);
    }
  }

  public get(id: number) {
    if (environment.production) {

    } else {
      // Request to Jax-rs Api
      return this.http.get(this.apiUrl + id);
    }
  }

  public update(product: Product) {
    if (environment.production) {
      // Simulate data
      for (let index = 0; index < this.simulation.length; index++) {
        const element = this.simulation[index];
        if (element.id === product.id) {
          this.simulation[index] = product;
        }
      }
      const data: ReplaySubject<any> = new ReplaySubject(1);
      data.next({});
      return data;
    } else {
      return this.http.put(this.apiUrl, product);
    }
  }

  public delete(id: number) {
    if (environment.production) {
      // Simulate data
      const index = this.simulation.map(function (e) { return e.id; }).indexOf(id);
      if (index !== -1) { this.simulation.splice(index, 1); }
      const data: ReplaySubject<any> = new ReplaySubject(1);
      data.next({});
      return data;
    } else {
      // Request to Jax-rs Api
      return this.http.delete(this.apiUrl + id);
    }
  }
}
