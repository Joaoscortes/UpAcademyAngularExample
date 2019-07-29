import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Product, DataService } from '../../core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductNewComponent } from './product-new/product-new.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products$: ReplaySubject<Product[]>;
  public modalRef: BsModalRef;
  public iconNew = faPlus;

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalService: BsModalService
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

  public openCreateModal() {
    this.modalRef = this.modalService.show(ProductNewComponent);
    this.modalRef.content.event.subscribe(data => {
      console.log('New Product :', data);
      this.modalRef.hide();
    });
  }
}
