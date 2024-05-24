import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { NgClass } from '@angular/common';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [SalesOverviewComponent, ActiveUsersComponent, NgClass],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit {
  dashboardService = inject(DashboardService);
  containerWidth: WritableSignal<number> = this.dashboardService.dashboardWidth;

  ngOnInit() {}
}
