import { Component, Input } from '@angular/core';

@Component({
    selector: 'dribbble-img',
    template: `<div class="dribbble-img">
                <a class="dribbble-link" href="{{htmlUrl}}">
                    <img alt="{{title}}" src="{{image}}" image-large="{{imageLarge}}" image-small="{{imageSmall}}"/>
                </a>
                <a class="dribbble-over" href="/{{id}}">
                    <strong>{{title}}</strong>
                    <span class="comment"></span>
                    <em class="timestamp">{{time}}</em>
                </a>
            </div>`
})
export class DribbbleImgComponent {
    
    @Input() id:string;
    @Input() title:string;
    @Input() htmlUrl:string;
    @Input() imageLarge:string;
    @Input() imageSmall:string;

}