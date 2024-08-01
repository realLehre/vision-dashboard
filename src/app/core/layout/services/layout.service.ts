import { inject, Injectable, signal } from '@angular/core';
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
  constructor() {
    this.menuOpened.set(
      JSON.parse(localStorage.getItem('menuStatus')!) ?? true,
    );
    if (localStorage.getItem('primaryColor')) {
      this.primaryColor.set(localStorage.getItem('primaryColor')!);
    } else {
      this.primaryColor.set('#0075FF');
    }
  }
}
