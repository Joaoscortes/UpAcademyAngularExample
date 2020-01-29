import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';

import { HeaderComponent, TablesComponent } from './components';
import { AccordionsComponent } from './components/accordions/accordions.component';

@NgModule({
    declarations: [
        HeaderComponent,
        TablesComponent,
        AccordionsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        FormsModule,
        AccordionModule.forRoot()
    ],
    exports: [
        HeaderComponent,
        TablesComponent,
        AccordionsComponent
    ]
})
export class SharedModule { }
