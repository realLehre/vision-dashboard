import { Component, inject, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ActiveUsersService } from '../services/active-users.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-active-users-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './active-users-chart.component.html',
  styleUrl: './active-users-chart.component.scss',
})
export class ActiveUsersChartComponent implements OnInit {
  chartOptions!: Partial<ChartOptions | any>;
  activeUsersService = inject(ActiveUsersService);

  ngOnInit() {
    this.chartOptions = this.activeUsersService.setChart();
  }
}
