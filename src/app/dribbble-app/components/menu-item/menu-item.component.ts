import { Component, Input, ViewEncapsulation } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'menu-item',
    template: '<li><a href="{{url}}">{{name}}</a><li>'
})
export class MenuItemComponent {
    @Input() url:string = '';
    @Input() name:string = '';
    descricao:string = '';
    _id:string = '';
}