import { NgModule, ModuleWithProviders } from '@angular/core';

import { DataService, ProductApiService, AccountApiService } from './services';

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        DataService,
        ProductApiService,
        AccountApiService
      ]
    };
  }
}
