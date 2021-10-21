(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('magic-string', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["magic-string"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var MagicStringService = /** @class */ (function () {
        function MagicStringService() {
        }
        return MagicStringService;
    }());
    MagicStringService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MagicStringService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MagicStringComponent = /** @class */ (function () {
        function MagicStringComponent() {
            this.originalContent = "";
            this.projectedContent = "";
        }
        MagicStringComponent.prototype.ngOnInit = function () {
            console.log(this.content);
            this.projectedContent = this.originalContent = this.content.nativeElement.textContent;
            console.log(this.originalContent, 'original content here');
        };
        MagicStringComponent.prototype.mask = function (event) {
            var value = event.target.value;
            this.projectedContent = this.originalContent;
            this.projectedContent = this.originalContent.replace(new RegExp(value, 'g'), "<span class='mask'> " + value + " </span>");
        };
        return MagicStringComponent;
    }());
    MagicStringComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MagicStringComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: MagicStringComponent, selector: "vl-magic-string", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0__namespace, template: "<input type=\"text\" name=\"search\" id=\"search\" (keydown.enter)=\"mask($event)\">\n\n<div class=\"original-content\" [hidden]=\"true\" #content>\n  <ng-content></ng-content>\n</div>\n\n<div class=\"projectedContent\" [innerHTML]=\"projectedContent\" ></div>\n", styles: [".mask { background-color: yellow}"], encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'vl-magic-string',
                        templateUrl: "./magic-string.component.html",
                        styles: [".mask { background-color: yellow}"
                        ],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                    type: i0.ViewChild,
                    args: ['content', { static: true }]
                }] } });

    var MagicStringModule = /** @class */ (function () {
        function MagicStringModule() {
        }
        return MagicStringModule;
    }());
    MagicStringModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MagicStringModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringModule, declarations: [MagicStringComponent], exports: [MagicStringComponent] });
    MagicStringModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: MagicStringModule, decorators: [{
                type: i0.NgModule,
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

    exports.MagicStringComponent = MagicStringComponent;
    exports.MagicStringModule = MagicStringModule;
    exports.MagicStringService = MagicStringService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=magic-string.umd.js.map
