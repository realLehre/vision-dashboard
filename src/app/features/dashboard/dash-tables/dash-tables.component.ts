import { Component, inject, WritableSignal } from '@angular/core';
import { NgClass } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { OrdersOverviewComponent } from '../orders-overview/orders-overview.component';
import { ActiveUsersComponent } from '../charts/active-users/active-users.component';
import { LayoutService } from '../../../core/layout/services/layout.service';

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
  layoutService = inject(LayoutService);
  containerWidth: WritableSignal<number> = this.layoutService.mainContentWidth;
}
