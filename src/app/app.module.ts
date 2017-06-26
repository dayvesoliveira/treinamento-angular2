import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DribbbleAppModule } from './dribbble-app/core/dribbble-app';

@NgModule({
  imports: [ BrowserModule, FormsModule , DribbbleAppModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
