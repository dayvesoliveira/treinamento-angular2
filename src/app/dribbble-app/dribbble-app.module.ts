import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DribbbleAppComponent } from '../dribbble-app/container/dribbble-app.component';
import { DribbbleHeaderComponent } from '../dribbble-app/components/dribbble-header/dribbble-header.component';
import { MenuItemDirective } from '../dribbble-app/components/dribbble-header/menu-item.directive';

@NgModule({
    imports:[ CommonModule ],
    declarations: [ 
        DribbbleAppComponent,
        DribbbleHeaderComponent,
        MenuItemDirective
    ],
    exports:[ DribbbleAppComponent ]
})
export class DribbbleAppModule {}