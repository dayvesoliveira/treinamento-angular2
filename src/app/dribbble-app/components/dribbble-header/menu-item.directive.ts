import { Directive, ElementRef, Input } from "@angular/core";

@Directive({ selector: '[menu-item]' })
export class MenuItemDirective {

    @Input('menu-item') isDisplay:boolean = false;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        //this.el.nativeElement.style.lineHeight = this.isDisplay ? '10px':'1';
        //this.el.nativeElement.style.float =   this.isDisplay ? 'left':'_';
        console.log('MenuItemDirective', this.el.nativeElement.style);
    }
    
}