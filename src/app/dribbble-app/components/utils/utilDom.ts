import { ElementRef } from '@angular/core';

export class UtilDom {

    constructor(private el: ElementRef) {

    }

    css(style:Object): void {
        if (style != null) {
            for (var name in style) {
                if (style.hasOwnProperty(name)) {
                    console.log("this is fog (" + name + ") for sure. Value: " + style[name]);
                }
                if ( style[ name ] != null ) {
                    //console.log("this is fog (" + name + ") for sure. Value: " + style[name]);
                    this.el.nativeElement.style[ name ] = style[ name ];
                }
            }
        }
    }
}