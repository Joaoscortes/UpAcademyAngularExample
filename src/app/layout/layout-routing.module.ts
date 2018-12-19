import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ShelfComponent } from './shelf/shelf.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
        {
            path: '', component: MainComponent
        },
        {
            path: 'product', component: ProductComponent
        },
        {
            path: 'shelf', component: ShelfComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
