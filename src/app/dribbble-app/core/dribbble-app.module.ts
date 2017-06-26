import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DribbbleAppComponent, 
         DribbbleHeaderComponent, 
         DribbbleContentComponent,
         DribbbleScreenshotComponent,
         DribbbleImgComponent,
         Shot,
         MenuItem 
        } from './dribbble-app';

import { DribbbleService } from '../services/dribbble.service';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        DribbbleAppComponent,
        DribbbleHeaderComponent,
        DribbbleContentComponent,
        DribbbleImgComponent,
        DribbbleScreenshotComponent
    ],
    exports: [ DribbbleAppComponent ],
    providers: [ DribbbleService ]
})
export class DribbbleAppModule {}