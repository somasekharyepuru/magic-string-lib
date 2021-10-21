import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vl-magic-string',
  templateUrl: "./magic-string.component.html",
  styles: [`.mask { background-color: yellow}`
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {
  @ViewChild('content', {static: true}) content: ElementRef;
  originalContent: string = "";
  projectedContent: string = "";
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.content)
    this.projectedContent = this.originalContent = this.content.nativeElement.textContent;
    console.log(this.originalContent, 'original content here')
  }

  mask(event): void {
    const value = event.target.value
    this.projectedContent = this.originalContent;
    this.projectedContent = this.originalContent.replace(new RegExp(value, 'g'), `<span class='mask'> ${value} </span>`)
  }

}
