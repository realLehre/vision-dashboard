import { Component, inject, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
  NgApexchartsModule,
  ApexGrid,
} from 'ng-apexcharts';
import { ProfileChartService } from './services/profile-chart.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-profile-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './profile-chart.component.html',
  styleUrl: './profile-chart.component.scss',
})
export class ProfileChartComponent implements OnInit {
  profileChartService = inject(ProfileChartService);
  dataSeries = this.profileChartService.dataSeries;
  @Input({ required: true }) name!: string;
  public series!: ApexAxisChartSeries;
  public chart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;
  public stroke!: ApexStroke;
  public grid!: ApexGrid;

  ngOnInit() {
    let ts2 = 1480;
    let dates = [];
    let color = '';
    for (let i = 0; i < 20; i++) {
      ts2 = ts2 + 8640;
      dates.push([ts2, this.dataSeries[0][i].value]);
    }

    if (this.name == 'Efficiency') {
      dates.splice(0, 7);
      color = '#01B574';
    } else {
      dates.splice(7, 14);
      color = '#0075FF';
    }

    this.series = [
      {
        name: this.name,
        data: dates,
      },
    ];
    this.chart = {
      type: 'area',
      stacked: false,
      height: 100,
      width: '100%',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
        autoSelected: 'zoom',
      },
    };
    this.stroke = {
      curve: 'smooth',
      width: 3,
      colors: [color],
    };
    this.dataLabels = {
      enabled: false,
    };
    this.markers = {
      size: 0,
    };
    this.title = {
      text: 'Stock Price Movement',
      align: 'left',
    };
    this.fill = {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    };
    this.yaxis = {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    };
    this.xaxis = {
      type: 'datetime',
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    };
    this.tooltip = {
      theme: 'dark',
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    };
    this.grid = {
      show: false,
    };
  }
}
