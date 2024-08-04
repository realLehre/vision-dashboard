import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../services/layout.service';
import { DashboardService } from '../../../features/dashboard/services/dashboard.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  layoutService = inject(LayoutService);
  primaryColor: WritableSignal<string> = this.layoutService.primaryColor;
  router = inject(Router);
  ngOnInit() {}

  onCloseSidenav() {
    this.layoutService.menuOpened.set(false);
  }

  onNavigate(route: string) {
    this.router.navigate(['/', 'vision', route]);
    if (this.layoutService.mainContentWidth() < 550) {
      this.onCloseSidenav();
    }
  }
}
