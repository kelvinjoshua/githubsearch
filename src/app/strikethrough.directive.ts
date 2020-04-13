import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private elem: ElementRef) {}
  @HostListener("click") onclicks() {
    this.textDeco("line-through"); //perfom line through decoration on the host element on one click//
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("None");
  }

  private textDeco(action: string) { 
    this.elem.nativeElement.style.textDecoration = action;//user initiated action//
  }


}
