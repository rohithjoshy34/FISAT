import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(elr:ElementRef){
    elr.nativeElement.style.color='red';
}

}
