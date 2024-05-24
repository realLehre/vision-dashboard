import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  menuOpened = signal(false);
  constructor() {
    this.menuOpened.set(JSON.parse(sessionStorage.getItem('menuStatus')!));
  }
}
