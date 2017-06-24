import { ElementRef } from '@angular/core';

export class UtilDom {

    constructor(private el: ElementRef) {

    }

    css(styles: Map<String, String>): void {
        if (styles != null) {
            styles.forEach((i, name)=>{
                this.el.nativeElement.style[ name ] = styles[ name ];
            });

            for (var name in styles) {
                if (styles.hasOwnProperty(name)) {
                    console.log("this is fog (" + name + ") for sure. Value: " + styles[name]);
                }
                if ( styles[ name ] != null ) {
                    //console.log("this is fog (" + name + ") for sure. Value: " + style[name]);
                    this.el.nativeElement.style[ name ] = styles[ name ];
                }
            }
        }
    }
}