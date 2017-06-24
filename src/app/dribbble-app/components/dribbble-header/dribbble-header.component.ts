import { Component, 
         Input, 
         Output, 
         EventEmitter,  
         AfterViewInit,
         ViewChild,
         ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:     'dribbble-header',
    templateUrl:  './dribbble-header.component.html',
    styleUrls:   ['./dribbble-header.component.css']
})
export class DribbbleHeaderComponent implements AfterViewInit {

    searchText:string;

    constructor(){
        this.searchText = '';
    }

    menuItens:Array<any>    = [];
    
    ishide:boolean          = true;
    myVar:String            = "";
    classVisSearch:String   = "";

    abrirMenu = new EventEmitter<any>();

    currentStyles:Map<String,string> = new Map<String,string>();
    currentStyles1:Map<String,string> = new Map<String,string>();
    styleSearchInput:Map<String,string> = new Map<String,string>();
    styleParentInput:Map<String,string> = new Map<String,string>();

    @ViewChild('.search-text') input: ElementRef;

    ngAfterViewInit() {
        
    }

    openMenu() {
        this.abrirMenu.emit();
        //console.log(this.input);
        this.ishide = this.ishide ? false : true;
        this.myVar  = this.ishide ? "":"nav-open";
        this.classVisSearch = ( this.ishide ? "":"shots-li visibleSearch" );
        
        this.setStyleMenuItemInput();
        this.setStyleMenuItem();
        this.setStyleSearchInput();
        this.setStyleParentInput();
    }

    setStyleMenuItemInput(){
        this.currentStyles = new Map<String,string>(
        [
            ['line-height', !this.ishide ? '10px':'1'],
            ['float', !this.ishide ? 'left':'_'],
            ['background-color', !this.ishide ? '#2f2f2f':'transparent'],
            ['position', !this.ishide ? 'relative':''],
            ['margin', !this.ishide ?'0px 5px':''],
            ['display', !this.ishide ?'block':'']
        ]);
    }

    setStyleMenuItem() {
        this.currentStyles1.set('line-height', !this.ishide ? '10px':'1');
        this.currentStyles1.set('float', !this.ishide ? 'left':'_');
        this.currentStyles1.set('background-color', !this.ishide ? '#2f2f2f':'transparent');
    }

    setStyleSearchInput() {
        this.styleSearchInput.set('display', this.ishide ? 'block':'');
        this.styleSearchInput.set('position', !this.ishide ? 'relative':'');
        this.styleSearchInput.set('float', !this.ishide ? 'left' : 'right');
    }

    setStyleParentInput() {
        this.styleParentInput.set('background', !this.ishide ? '#2f2f2f':'transparent');
    }

}