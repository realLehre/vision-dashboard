import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  menuOpened = signal(false);
  sidePanelOpened = signal<boolean>(false);
  primaryColor = signal<string>('');
  constructor() {
    this.menuOpened.set(JSON.parse(sessionStorage.getItem('menuStatus')!));
    if (localStorage.getItem('primaryColor')) {
      this.primaryColor.set(localStorage.getItem('primaryColor')!);
    } else {
      this.primaryColor.set('red');
    }
  }
}
