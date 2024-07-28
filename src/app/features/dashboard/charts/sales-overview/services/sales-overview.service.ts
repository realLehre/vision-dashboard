import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesOverviewService {
  chartData: { name: string; data: number[] }[] = [
    {
      name: 'Product 1',
      data: [400, 180, 300, 100, 410, 80, 288, 384, 222, 122, 100, 42],
    },
    {
      name: 'Product 2',
      data: [200, 380, 120, 230, 190, 330, 188, 254, 422, 302, 170, 420],
    },
  ];

  categories: string[] = [
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
  ];

  colors: string[] = ['#2CD9FF', '#0075FF'];
  constructor() {}

  setChart() {
    return {
      series: [...this.chartData],
      legend: {
        show: false,
      },
      chart: {
        width: '100%',
        height: 350,
        type: 'area',
        toolbar: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: [...this.colors],
      },
      fill: {
        colors: [...this.colors],
        type: 'gradient',
        gradient: {
          type: 'vertical',
          shadeIntensity: 1,
          opacityFrom: 0.8,
          gradientToColors: [...this.colors],
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      xaxis: {
        type: 'month',
        categories: [...this.categories],
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
        theme: 'dark',
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

  getRandomHexColor() {
    for (let i = 2; i < this.chartData.length; i++) {
      const hex = Math.floor(Math.random() * 16777215).toString(16);
      this.colors.push(`#${hex.padStart(6, '0').toUpperCase()}`);
    }
  }
}
