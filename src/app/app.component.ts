import { Component, HostListener, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { SidePanelComponent } from './core/layout/side-panel/side-panel.component';
import { filter } from 'rxjs';
import { LayoutService } from './core/layout/services/layout.service';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, SidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  layoutService = inject(LayoutService);
  scrollService = inject(ScrollService);

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Get the current activated route
        let currentRoute = this.route.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        // Get the route snapshot URL
        const routeSnapshot = currentRoute.snapshot;
        this.layoutService.currentRoute.set(routeSnapshot.url[1].path);
      });
  }
}
