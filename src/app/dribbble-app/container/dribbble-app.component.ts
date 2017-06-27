import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

    shots:  Shot[] = [];

    shot:   Shot;
    
    router: Router;

    activatedRoute: ActivatedRoute;

    service:DribbbleService;

    @Input()    
    largeImages: boolean = false;

    constructor(service: DribbbleService, router: Router, activatedRoute: ActivatedRoute){
        this.service = service;
        this.router  = router;
        this.activatedRoute = activatedRoute;
        
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

    findById(){
        let that = this;
        this.activatedRoute.params.subscribe(params=> {
            let id = params['id'];
            if (id) {
                this.service.findById( id )
                            .subscribe(
                                shot=>this.shot = shot,
                                erro=>console.error(erro)
                            );
            }
        });
    }


}