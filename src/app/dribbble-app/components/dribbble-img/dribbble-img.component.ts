import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'dribbble-img',
    template: `<div class="dribbble-img">
                <a class="dribbble-link" href="{{htmlUrl}}">
                  <img alt="{{title}}" src="{{image}}">
                </a>
                <a class="dribbble-over" href="/{{_id}}">
                    <strong>{{title}}</strong>
                    <span class="comment"></span>
                    <em class="timestamp">{{time | date:'dd/MM/yyyy'}}</em>
                </a>
            </div>`,
    encapsulation: ViewEncapsulation.Emulated
})
export class DribbbleImgComponent {
        
    @Input() _id: string = "";
    @Input() title: string = ""; 
    @Input() description: string = "";
    @Input() image: string = "";
    @Input() imageSmall: string = "";
    @Input() imageLarge: string = "";
    @Input() htmlUrl: string = "";
    @Input() time: string  = "";
    @Input() images: any;
    @Input() createdAt: string = "";

}