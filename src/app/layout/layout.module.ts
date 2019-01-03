import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiMapModule} from '@ngui/map';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ShelfComponent } from './shelf/shelf.component';

import { HeaderComponent, TablesComponent } from '../shared';
import { TranslateModule } from '@ngx-translate/core';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    ShelfComponent,
    LayoutComponent,
    HeaderComponent,
    TablesComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBDW7tXXUvwCFeGZl3FRqUzTKAlUH8OF3Q'})
  ]
})
export class LayoutModule { }
