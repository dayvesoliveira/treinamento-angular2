import { Component, 
         Input, 
         Output, 
         EventEmitter } from '@angular/core';

import { MenuItem } from '../models/menuItem';

@Component({
    moduleId:     module.id,
    selector:     'dribbble-header',
    templateUrl:  './dribbble-header.component.html'
})
export class DribbbleHeaderComponent {

    searchText:string;
    largeImages:boolean = false;
    menuItens:Array<MenuItem> = [];

    constructor(){
        this.searchText = '';
        this.menuItens = [
            new MenuItem('/shots', 'Popular'),
            new MenuItem('/shots?sort=recent', 'Recent'),
            new MenuItem('/shots?list=debuts', 'Debuts'),
            new MenuItem('/shots?list=teams', 'Teams'),
            new MenuItem('/shots?list=playoffs', 'Playoffs')
        ];
    }

    
    ishide:boolean          = true;
    myVar:String            = "";
    classVisSearch:String   = "";

    abrirMenu = new EventEmitter<any>();

    currentStyles:Map<String,string> = new Map<String,string>();
    currentStyles1:Map<String,string> = new Map<String,string>();
    styleSearchInput:Map<String,string> = new Map<String,string>();
    styleParentInput:Map<String,string> = new Map<String,string>();

    openMenu() {
        this.abrirMenu.emit(null);
        
        this.ishide = this.ishide ? false : true;
        this.myVar  = this.ishide ? "":"nav-open";
        this.classVisSearch = ( this.ishide ? "":"shots-li visibleSearch" );
        
        this.setStyleMenuItemInput();
        this.setStyleMenuItem();
        this.setStyleSearchInput();
        this.setStyleParentInput();
    }

    setStyleMenuItemInput(){
        this.currentStyles = new Map<String,string>([
            ['line-height', !this.ishide ? '10px':'1'],
            ['float', !this.ishide ? 'left':'_'],
            ['background-color', !this.ishide ? '#2f2f2f':'transparent'],
            ['position', !this.ishide ? 'relative':''],
            ['margin', !this.ishide ?'0px 5px':''],
            ['display', !this.ishide ?'block':'']
        ]);
    }

    setStyleMenuItem() {
        this.currentStyles1 = new Map<String,string>([
            ['line-height', !this.ishide ? '10px':'1'],
            ['float', !this.ishide ? 'left':'_'],
            ['background-color', !this.ishide ? '#2f2f2f':'transparent']
        ]);
    }

    setStyleSearchInput() {
        this.styleSearchInput  = new Map<String,string>([
            ['display', this.ishide ? 'block':''],
            ['position', !this.ishide ? 'relative':''],
            ['float', !this.ishide ? 'left' : 'right']
        ]);
    }

    setStyleParentInput() {
        this.styleParentInput.set('background', !this.ishide ? '#2f2f2f':'transparent');
    }

}