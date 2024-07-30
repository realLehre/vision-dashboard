import { Component, inject, WritableSignal } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { OrdersOverviewComponent } from '../orders-overview/orders-overview.component';
import { ActiveUsersComponent } from '../charts/active-users/active-users.component';
import { NgClass } from '@angular/common';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dash-tables',
  standalone: true,
  imports: [
    ProjectsComponent,
    OrdersOverviewComponent,
    ActiveUsersComponent,
    NgClass,
  ],
  templateUrl: './dash-tables.component.html',
  styleUrl: './dash-tables.component.scss',
})
export class DashTablesComponent {
  dashboardService = inject(DashboardService);
  containerWidth: WritableSignal<number> = this.dashboardService.dashboardWidth;
}
