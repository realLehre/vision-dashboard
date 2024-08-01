import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAuthorStatus]',
  standalone: true,
})
export class AuthorStatusDirective implements OnInit {
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  @Input() appAuthorStatus!: string;
  constructor() {}

  ngOnInit() {
    this.styleStatus();
  }

  styleStatus() {
    console.log(this.appAuthorStatus);
    if (this.appAuthorStatus?.toLowerCase() === 'online') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'backgroundColor',
        '#01B574',
      );
    } else if (this.appAuthorStatus?.toLowerCase() == 'offline') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '1px solid #FFFFFF',
      );
    }
  }
}
