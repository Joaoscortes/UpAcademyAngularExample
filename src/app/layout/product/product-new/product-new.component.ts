import { Component, EventEmitter } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

import { Product } from 'src/app/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent {

  public product: Product = new Product();
  public event: EventEmitter<any> = new EventEmitter();
  constructor(
    public bsModalRef: BsModalRef
  ) {
    this.product.iva = 23;
    this.product.pvp = 12;
    this.product.discount = 0;
  }

  triggerEvent() {
    this.event.emit(this.product);
  }

}
