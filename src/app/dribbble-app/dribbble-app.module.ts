import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DribbbleAppComponent } from '../dribbble-app/container/dribbble-app.component';
import { DribbbleHeaderComponent } from '../dribbble-app/components/dribbble-header/dribbble-header.component';

@NgModule({
    imports:[ CommonModule ],
    declarations: [ 
        DribbbleAppComponent,
        DribbbleHeaderComponent
    ],
    exports:[ DribbbleAppComponent ]
})
export class DribbbleAppModule {}