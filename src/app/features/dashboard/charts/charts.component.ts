import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [SalesOverviewComponent, ActiveUsersComponent, NgClass],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit {
  @ViewChild('charts', { static: true })
  chartsContainer!: ElementRef<HTMLDivElement>;
  containerWidth!: number;

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.containerWidth = this.chartsContainer.nativeElement.offsetWidth;
  }
}
