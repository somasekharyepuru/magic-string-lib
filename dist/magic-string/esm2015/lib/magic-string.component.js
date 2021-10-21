import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class MagicStringComponent {
    constructor() {
        this.originalContent = "";
        this.projectedContent = "";
    }
    ngOnInit() {
        console.log(this.content);
        this.projectedContent = this.originalContent = this.content.nativeElement.textContent;
        console.log(this.originalContent, 'original content here');
    }
    mask(event) {
        const value = event.target.value;
        this.projectedContent = this.originalContent;
        this.projectedContent = this.originalContent.replace(new RegExp(value, 'g'), `<span class='mask'> ${value} </span>`);
    }
}
MagicStringComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MagicStringComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: MagicStringComponent, selector: "vl-magic-string", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: "<input type=\"text\" name=\"search\" id=\"search\" (keydown.enter)=\"mask($event)\">\n\n<div class=\"original-content\" [hidden]=\"true\" #content>\n  <ng-content></ng-content>\n</div>\n\n<div class=\"projectedContent\" [innerHTML]=\"projectedContent\" ></div>\n", styles: [".mask { background-color: yellow}"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vl-magic-string',
                    templateUrl: "./magic-string.component.html",
                    styles: [`.mask { background-color: yellow}`
                    ],
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['content', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMtc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hZ2ljLXN0cmluZy9zcmMvbGliL21hZ2ljLXN0cmluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYWdpYy1zdHJpbmcvc3JjL2xpYi9tYWdpYy1zdHJpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBc0IsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVM1RixNQUFNLE9BQU8sb0JBQW9CO0lBSS9CO1FBRkEsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IscUJBQWdCLEdBQVcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxJQUFJLENBQUMsS0FBSztRQUNSLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsdUJBQXVCLEtBQUssVUFBVSxDQUFDLENBQUE7SUFDdEgsQ0FBQzs7a0hBbEJVLG9CQUFvQjtzR0FBcEIsb0JBQW9CLHlLQ1RqQyx3UUFPQTs0RkRFYSxvQkFBb0I7a0JBUGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsTUFBTSxFQUFFLENBQUMsbUNBQW1DO3FCQUMzQztvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7MEVBRXVDLE9BQU87c0JBQTVDLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZsLW1hZ2ljLXN0cmluZycsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWFnaWMtc3RyaW5nLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlczogW2AubWFzayB7IGJhY2tncm91bmQtY29sb3I6IHllbGxvd31gXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTWFnaWNTdHJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIG9yaWdpbmFsQ29udGVudDogc3RyaW5nID0gXCJcIjtcbiAgcHJvamVjdGVkQ29udGVudDogc3RyaW5nID0gXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcbiAgICB0aGlzLnByb2plY3RlZENvbnRlbnQgPSB0aGlzLm9yaWdpbmFsQ29udGVudCA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHRoaXMub3JpZ2luYWxDb250ZW50LCAnb3JpZ2luYWwgY29udGVudCBoZXJlJylcbiAgfVxuXG4gIG1hc2soZXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHRoaXMucHJvamVjdGVkQ29udGVudCA9IHRoaXMub3JpZ2luYWxDb250ZW50O1xuICAgIHRoaXMucHJvamVjdGVkQ29udGVudCA9IHRoaXMub3JpZ2luYWxDb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cCh2YWx1ZSwgJ2cnKSwgYDxzcGFuIGNsYXNzPSdtYXNrJz4gJHt2YWx1ZX0gPC9zcGFuPmApXG4gIH1cblxufVxuIiwiPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIGlkPVwic2VhcmNoXCIgKGtleWRvd24uZW50ZXIpPVwibWFzaygkZXZlbnQpXCI+XG5cbjxkaXYgY2xhc3M9XCJvcmlnaW5hbC1jb250ZW50XCIgW2hpZGRlbl09XCJ0cnVlXCIgI2NvbnRlbnQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicHJvamVjdGVkQ29udGVudFwiIFtpbm5lckhUTUxdPVwicHJvamVjdGVkQ29udGVudFwiID48L2Rpdj5cbiJdfQ==