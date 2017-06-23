import { Directive, ElementRef, Input } from "@angular/core";
import { UtilDom } from '../utils/utilDom';

@Directive({ selector: 'menu-item' })
export class MenuItemDirective {

    @Input('menu-item') isDisplay:boolean = false;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        new UtilDom(this.el).css({ 
                'line-height':  this.isDisplay ? '10px':'1',
                'float':        this.isDisplay ? 'left':'_'
            });
        //this.el.nativeElement.style.lineHeight = this.isDisplay ? '10px':'1';
        //this.el.nativeElement.style.float =   this.isDisplay ? 'left':'_';
        console.log('MenuItemDirective', this.el.nativeElement.style);
    }
}