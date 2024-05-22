import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.setChart();
  }

  setChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Users',
          data: [424, 384, 127, 346, 261, 58, 113, 234, 400],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: '10px',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
        labels: {
          show: false,
          style: {
            colors: '#fff',
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff',
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
        },
      },
      fill: {
        opacity: 1,
        colors: ['#fff'],
      },
      tooltip: {
        theme: 'dark',
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
    };
  }
}
