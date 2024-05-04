import { Directive } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true,
})
export class TextColorDirective {
  constructor() {}
}
