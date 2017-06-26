import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dribbble-img',
    template: `<div class="dribbble-img">
                <a class="dribbble-link" [href]="shot.htmlUrl">
                    <img  alt="{{shot.title}}" [src]="shot.image" 
                          imageLarge="{{shot.imageLarge}}" 
                          imageSmall="{{shot.imageSmall}}"
                         />
                </a>
                <a class="dribbble-over" href="/{{id}}">
                    <strong>{{shot.title}}</strong>
                    <span class="comment"></span>
                    <em class="timestamp">{{shot.time}}</em>
                </a>
            </div>`
})
export class DribbbleImgComponent {
    
    @Input()
    shot: any;
    
   /* @Input() 
    id:string = "";
    
    @Input() 
    title:string = ""; 

    @Input() 
    description:string = "";

    @Input() 
    image:string = "";

    @Input() 
    imageSmall:string = "";

    @Input() 
    imageLarge:string = "";

    @Input() 
    htmlUrl:string = "";

    @Input() 
    time:string  = "";

    @Input() 
    images: any;

    @Input() 
    createdAt: string = "";*/

}