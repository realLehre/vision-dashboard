import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  router = inject(Router);
  viewportScroller = inject(ViewportScroller);
  constructor() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
