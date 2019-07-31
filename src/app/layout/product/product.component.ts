import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Product, DataService, ProductApiService } from '../../core';
import { ProductNewComponent } from './product-new/product-new.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public products$: ReplaySubject<Product[]>;
  private subscriptionProducts: Subscription;
  public modalRef: BsModalRef;
  public iconNew = faPlus;

  constructor(
    private dataService: DataService,
    private productApi: ProductApiService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.products$ = this.dataService.products$;
    this.subscriptionProducts = this.products$.subscribe((a) => console.log('products$ on ProductComponent', JSON.stringify(a)));
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptionProducts.unsubscribe();
  }

  updateProducts() {
    this.dataService.updateProducts();
  }

  clickRow(product) {
    this.router.navigate(['/product', product.id]);
  }

  public openCreateModal() {
    this.modalRef = this.modalService.show(ProductNewComponent);
    this.modalRef.content.event.subscribe(product => {
      this.productApi.create(product).subscribe(
        () => {
          this.dataService.updateProducts();
          this.modalRef.hide();
        }
      );
    });
  }
}
