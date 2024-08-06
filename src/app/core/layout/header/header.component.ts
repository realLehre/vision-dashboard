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
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  layoutService = inject(LayoutService);
  onOpenMenu() {
    this.layoutService.menuOpened.set(true);
  }
  onOpenSidePanel() {
    this.layoutService.sidePanelOpened.set(true);
  }
}
