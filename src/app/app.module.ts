import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DribbbleAppModule } from './dribbble-app/dribbble-app.module';


@NgModule({
  imports: [ BrowserModule, DribbbleAppModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
