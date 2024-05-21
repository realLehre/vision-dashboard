import { Component, OnInit, ViewChild } from '@angular/core';
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
  // @ViewChild('chart') chart: ChartComponent;
  chartOptions!: Partial<ChartOptions | any>;
  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit() {
    this.setChart();
  }

  setChart() {
    this.chartOptions = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 200, 40, 28, 51, 42, 109, 200],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41, 40, 28, 51, 42, 109, 200],
        },
      ],
      chart: {
        width: '100%',
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'month',
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            colors: '#fff',
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: '#fff',
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        show: true,
        borderColor: '#56577A',
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
    };
  }

  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
