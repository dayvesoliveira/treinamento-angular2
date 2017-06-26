import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId:     module.id,
  selector:     'dribbble-content',
  template:    `<ol class="dribbbles group">
                    <ng-content></ng-content>
                </ol>`
})
export class DribbbleContentComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {

  }

}
