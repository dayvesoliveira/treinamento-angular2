import { Component, Input } from '@angular/core';
import { Shot } from "../models/shot";

@Component({
    moduleId:  module.id,
    selector:  'dribbble-screenshot',
    template:  `<li class="group">
                    <div class="dribbble">
                        <div class="dribbble-shot">
                            <ng-content></ng-content>
                        </div>
                    </div>
                </li>
                `
})
export class DribbbleScreenshotComponent {

    @Input() shot:Shot;

    constructor() {

    }
}