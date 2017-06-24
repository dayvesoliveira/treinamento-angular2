import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DribbbleAppComponent } from '../dribbble-app/container/dribbble-app.component';
import { DribbbleHeaderComponent } from '../dribbble-app/components/dribbble-header/dribbble-header.component';
import { DribbbleContentComponent } from '../dribbble-app/components/dribbble-content/dribbble-content.component';

@NgModule({
    imports:[ CommonModule ],
    declarations: [ 
        DribbbleAppComponent,
        DribbbleHeaderComponent,
        DribbbleContentComponent
    ],
    exports:[ DribbbleAppComponent ]
})
export class DribbbleAppModule {}