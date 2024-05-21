import { Component } from '@angular/core';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ActiveUsersComponent } from './active-users/active-users.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [SalesOverviewComponent, ActiveUsersComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {}
