import * as i0 from '@angular/core';
import { Injectable, Component, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';

class MagicStringService {
    constructor() { }
}
MagicStringService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MagicStringService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MagicStringComponent {
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

class MagicStringModule {
}
MagicStringModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MagicStringModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringModule, declarations: [MagicStringComponent], exports: [MagicStringComponent] });
MagicStringModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: MagicStringModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MagicStringComponent
                    ],
                    imports: [],
                    exports: [
                        MagicStringComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of magic-string
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MagicStringComponent, MagicStringModule, MagicStringService };
//# sourceMappingURL=magic-string.js.map
