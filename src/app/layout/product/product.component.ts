import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Product, DataService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products$: ReplaySubject<Product[]>;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.products$ = this.dataService.products$;
  }

  ngOnInit() {
  }

  updateProducts() {
    this.dataService.updateProducts();
  }

  clickRow(product) {
    this.router.navigate(['/product', product.id]);
  }
}
