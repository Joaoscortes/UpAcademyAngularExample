import { NgModule } from '@angular/core';
import { DataService, ProductApiService, AccountApiService } from './services';
import { HeaderComponent, TablesComponent } from './components';

@NgModule({})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        DataService,
        ProductApiService,
        AccountApiService,
        HeaderComponent,
        TablesComponent
      ]
    };
  }
}
export * from './components';
export * from './guards';
export * from './models';
export * from './services';
