import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { SalesOverviewService } from './services/sales-overview.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-overview.component.html',
  styleUrl: './sales-overview.component.scss',
})
export class SalesOverviewComponent implements OnInit {
  chartOptions!: Partial<ChartOptions | any>;
  currentYear = new Date().getFullYear();
  salesOverviewService = inject(SalesOverviewService);

  constructor() {}

  ngOnInit() {
    this.setChart();
  }

  setChart() {
    this.salesOverviewService.getRandomHexColor();
    this.chartOptions = this.salesOverviewService.setChart();
  }
}
