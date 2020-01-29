import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent, TablesComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        TablesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        FormsModule
    ],
    exports: [
        HeaderComponent,
        TablesComponent
    ]
})
export class SharedModule { }
