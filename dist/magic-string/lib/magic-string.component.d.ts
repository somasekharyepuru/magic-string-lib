import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MagicStringComponent implements OnInit {
    content: ElementRef;
    originalContent: string;
    projectedContent: string;
    constructor();
    ngOnInit(): void;
    mask(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MagicStringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MagicStringComponent, "vl-magic-string", never, {}, {}, never, ["*"]>;
}
