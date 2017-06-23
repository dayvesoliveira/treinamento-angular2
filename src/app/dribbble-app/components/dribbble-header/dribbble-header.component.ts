import { Component, 
         Input, 
         Output, 
         EventEmitter, 
         AfterContentInit, 
         AfterViewInit,
         ViewChildren,
         ContentChildren, 
         QueryList } from '@angular/core';
import { MenuItemDirective } from "./menu-item.directive";

@Component({
  selector:     'dribbble-header',
  templateUrl:  './dribbble-header.component.html',
  styleUrls:   ['./dribbble-header.component.css']
})
export class DribbbleHeaderComponent implements AfterViewInit  {

    @Input()
    menuItens:Array<any> = [];

    @Output()
    ishide:boolean = false;

    @Output()
    myVar:String = "";

    @Output()
    classVisSearch:String = "";

    @Output()
    abrirMenu = new EventEmitter<any>();

    //@ContentChildren(MenuItemDirective) item: QueryList<MenuItemDirective>;
    @ViewChildren(MenuItemDirective) menuItemLi: QueryList<MenuItemDirective>;
    @ViewChildren(".search-text") searchItem: QueryList<any>;

    openMenu() {
        this.abrirMenu.emit();
        this.ishide = this.ishide ? false : true;
        console.log(this.menuItemLi);

    }

    ngAfterViewInit() {
        console.log(this.menuItemLi[0]);
        console.log(this.searchItem);
    }

    updateStyleMenuItem() {
        /*var input = $document[0].getElementById('search-input');
        if ( input ) {
            var li  = $document[0].querySelectorAll('#nav-menu > li');
            var $input = angular.element( input );

            var display = $input.css('display'),
                vis     = (display !== 'block') ? true : false;

            $input.css({'display': vis ? 'block':'',
                        'position': vis ? 'relative':'absolute', 
                        'float': vis ? 'left' : 'right'});
            
            var parent = angular.element( input.parentNode );
            parent.css({'background': vis ? '#2f2f2f':'transparent'});

            var $li = angular.element(li);
            $li.css({'line-height': vis ? '10px':'1',
                     'float': vis ? 'left':'_'});
        }*/
    }

}