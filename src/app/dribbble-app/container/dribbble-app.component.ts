import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DribbbleService } from '../services/dribbble.service';

import { Shot, DribbbleImgComponent } from '../core/dribbble-app';

@Component({
  moduleId:  module.id,
  selector: 'dribbble-app',
  template: `<div class="dribbble-app">
                <dribbble-header></dribbble-header>
                <div [ngClass]="largeImages?'large-image': ''">
                    <dribbble-content>
                        <dribbble-screenshot *ngFor="let shot of shots">

                            <dribbble-img 
                                _id="{{shot.id}}"
                                title="{{shot.title}}"
                                description="{{shot.description}}"
                                image="{{shot.images.normal}}"
                                imageSmall="{{shot.images.teaser}}"
                                imageLarge="{{shot.images.hidpi}}"
                                htmlUrl="{{shot.html_url}}"
                                time="{{shot.created_at}}">
                            </dribbble-img>

                        </dribbble-screenshot>
                    </dribbble-content>
                </div>
            </div>
            `
})
export class DribbbleAppComponent {
    @Input()    
    largeImages: boolean = false;

    shots:Shot[] = [];

    service:DribbbleService;

    constructor(service: DribbbleService){
        this.service = service;
        this.initialize();
    }

    initialize() {
        let that = this;
        this.service.lista()
                    .subscribe(
                        shots =>that.shots = shots,//arrow function de callback
                        erro => console.log(erro)
                    );
    }
}