import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { OrdersOverviewComponent } from '../orders-overview/orders-overview.component';

@Component({
  selector: 'app-dash-tables',
  standalone: true,
  imports: [ProjectsComponent, OrdersOverviewComponent],
  templateUrl: './dash-tables.component.html',
  styleUrl: './dash-tables.component.scss',
})
export class DashTablesComponent {}
