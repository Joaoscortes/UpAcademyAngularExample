import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent, TablesComponent } from './components';

@NgModule({
    declarations: [
        HeaderComponent,
        TablesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        HeaderComponent,
        TablesComponent
    ]
})
export class SharedModule { }
