import { HostListener, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  menuOpened = signal(true);
  sidePanelOpened = signal<boolean>(false);
  primaryColor = signal<string>('');
  router = inject(ActivatedRoute);
  currentRoute = signal('');
  mainContentWidth = signal<number>(0);
  routeInitiated = signal<boolean>(false);

  constructor() {
    this.onToggleMobile();

    if (localStorage.getItem('primaryColor')) {
      this.primaryColor.set(localStorage.getItem('primaryColor')!);
    } else {
      this.primaryColor.set('#0075FF');
    }
  }

  @HostListener('window:resize', ['$event'])
  onToggleMobile() {
    if (window.innerWidth < 550) {
      this.menuOpened.set(false);
    } else {
      this.menuOpened.set(
        JSON.parse(localStorage.getItem('menuStatus')!) ?? true,
      );
    }
  }
}
