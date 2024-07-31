import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { LayoutService } from '../services/layout.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  layoutService = inject(LayoutService);
  @ViewChild('header', { static: true }) header!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const isScrolled = window.scrollY > 50;
    if (isScrolled) {
      this.header.nativeElement.classList.add('add_bg');
    } else {
      this.header.nativeElement.classList.remove('add_bg');
    }
  }

  onOpenMenu() {
    this.layoutService.menuOpened.set(true);
  }
  onOpenSidePanel() {
    this.layoutService.sidePanelOpened.set(true);
  }
}
