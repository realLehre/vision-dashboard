import { Component } from '@angular/core';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [SalesOverviewComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {}
