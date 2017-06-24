import { Component } from '@angular/core';

@Component({
  selector: 'dribbble-app',
  styleUrls: ['./dribbble-app.component.css'],
  template: `
        <div class="dribbble-app">
            <dribbble-header></dribbble-header>
            <dribbble-content></dribbble-content>
        </div>
        `
})
export class DribbbleAppComponent {

}