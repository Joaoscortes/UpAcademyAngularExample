import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NguiMapModule } from '@ngui/map';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from './shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ShelfComponent } from './shelf/shelf.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductNewComponent,
    ShelfComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    TranslateModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBDW7tXXUvwCFeGZl3FRqUzTKAlUH8OF3Q' })
  ],
  entryComponents: [ProductNewComponent]
})
export class LayoutModule { }
