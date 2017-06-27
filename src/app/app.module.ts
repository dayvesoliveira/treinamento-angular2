import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ROUTER_MODULE } from './routes';
import { AppComponent } from './app.component';
import { DribbbleAppModule } from './dribbble-app/core/dribbble-app';

@NgModule({
  imports: [ BrowserModule, 
             HttpModule, 
             FormsModule , 
             DribbbleAppModule,
             ROUTER_MODULE
           ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
