import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NguiMapModule } from '@ngui/map';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ShelfComponent } from './shelf/shelf.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductNewComponent } from './product/product-new/product-new.component';

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
    LayoutRoutingModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBDW7tXXUvwCFeGZl3FRqUzTKAlUH8OF3Q' })
  ],
  entryComponents: [ProductNewComponent]
})
export class LayoutModule { }
