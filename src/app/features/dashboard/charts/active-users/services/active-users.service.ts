import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveUsersService {
  chartData: { name: string; data: number[] }[] = [
    {
      name: 'Users',
      data: [424, 384, 127, 346, 261, 58, 113, 234, 400],
    },
  ];
  constructor() {}

  setChart() {
    return {
      series: [...this.chartData],
      chart: {
        type: 'bar',
        height: 222,
        toolbar: { show: false },
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
        labels: {
          show: false,
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
