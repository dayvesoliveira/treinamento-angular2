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
import { SearchInputDirective } from "./search-input.directive";

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

    @ViewChildren(SearchInputDirective) searchItem: QueryList<SearchInputDirective>;
    @ViewChildren(MenuItemDirective) menuItemLi: QueryList<MenuItemDirective>;

    openMenu() {
        this.abrirMenu.emit();
        this.ishide = this.ishide ? false : true;
        console.log(this.menuItemLi);

    }

    ngAfterViewInit() {
        console.log(this.menuItemLi);
        console.log(this.searchItem);
    }

    updateStyleMenuItem() {
        /*
        @Input() isDisplay:boolean = false;
        constructor(private el: ElementRef) {}
        ngOnInit() { this.el.nativeElement.style }
        search-input: {
            isDisplay:boolean;
            style: {'display': vis ? 'block':'',
                        'position': vis ? 'relative':'absolute', 
                        'float': vis ? 'left' : 'right'
                    }
        }

        input-parent: {
            isDisplay:boolean;
            style: { 'background': isDisplay ? '#2f2f2f':'transparent' }
        }

        menu-item {
            isDisplay:boolean;
            style: { 'line-height': vis ? '10px':'1',
                     'float': vis ? 'left':'_'
            }
        }
        
        var input = $document[0].getElementById('search-input');
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