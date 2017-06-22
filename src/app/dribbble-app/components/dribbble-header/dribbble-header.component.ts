import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dribbble-header',
  templateUrl: './dribbble-header.component.html',
  styleUrls: ['./dribbble-header.component.css']
})
export class DribbbleHeaderComponent {

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

    openMenu() {
      this.abrirMenu.emit();

      this.ishide = this.ishide ? false : true;
      this.myVar  = this.ishide ? "":"nav-open";
      this.classVisSearch = this.ishide ? "":"shots-li visibleSearch";

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