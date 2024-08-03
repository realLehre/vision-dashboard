import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';
import { LayoutService } from '../../core/layout/services/layout.service';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  layoutService = inject(LayoutService);
  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.layoutService.primaryColor(),
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'transparent',
    );
  }
}
