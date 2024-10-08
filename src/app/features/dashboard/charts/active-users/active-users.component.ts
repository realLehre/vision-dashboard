import { Component, inject } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ActiveUsersChartComponent } from './active-users-chart/active-users-chart.component';
import { LayoutService } from '../../../../core/layout/services/layout.service';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [DecimalPipe, CurrencyPipe, ActiveUsersChartComponent],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.scss',
})
export class ActiveUsersComponent {
  layoutService = inject(LayoutService);
}
