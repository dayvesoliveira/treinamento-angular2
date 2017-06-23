import { Directive/*, Input, TemplateRef, ViewContainerRef*/ } from '@angular/core';

@Directive({ selector: '.searchInput' })
export class SearchInputDirective {
        
        /*private hasView:boolean = false;
        
        constructor(
            private templateRef: TemplateRef<any>, 
            private viewContainer: ViewContainerRef) {}

        @Input() 
        set searchInput(condition: boolean) {
            if (!condition && !this.hasView) {
                //(method) ViewContainerRef.createEmbeddedView<any>(
                //    templateRef: TemplateRef<any>, 
                //   context?: any, 
                //    index?: number ): EmbeddedViewRef<any>
                //Instantiates an Embedded View based on the {@link TemplateRef templateRef} and inserts it into this container at the specified index.
                //If index is not specified, the new View will be inserted as the last View in the container.
                //Returns the {@link ViewRef} for the newly created View.
                //
                console.log(this.templateRef);
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            } else if (condition && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        }*/
}