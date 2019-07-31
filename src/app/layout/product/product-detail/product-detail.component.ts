import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService, Product, ProductApiService } from 'src/app/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public msg: string;

  constructor(
    private dataService: DataService,
    private productApi: ProductApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(
      params => {
        this.product = this.dataService.getProductById(Number(params.id));
      });
  }

  ngOnInit() { }

  update() {
    this.productApi.update(this.product).subscribe(
      () => {
        this.msg = 'Product Updated';
      }
    );
  }

  delete() {
    this.productApi.delete(this.product.id).subscribe(
      () => {
        this.dataService.updateProducts();
        this.router.navigate(['/product']);
      }
    );
  }

}
