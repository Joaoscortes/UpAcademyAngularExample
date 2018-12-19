import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Product, DataService } from 'src/app/shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products$: ReplaySubject<Product[]>;

  constructor(
    private dataService: DataService
  ) {
    this.products$ = this.dataService.products$;
  }

  ngOnInit() {
  }

  updateProducts() {
    this.dataService.updateProducts();
  }
}
