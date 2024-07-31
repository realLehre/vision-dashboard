import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { QuickInfoComponent } from './quick-info/quick-info.component';
import { RecordsComponent } from './records/records.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardService } from './services/dashboard.service';
import { DashTablesComponent } from './dash-tables/dash-tables.component';
import { SidePanelComponent } from '../../core/layout/side-panel/side-panel.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    QuickInfoComponent,
    RecordsComponent,
    ChartsComponent,
    DashTablesComponent,
    SidePanelComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  document = inject(DOCUMENT);
  @ViewChild('dashboard', { static: true })
  dashboardContainer!: ElementRef<HTMLDivElement>;
  dashboardService = inject(DashboardService);

  ngOnInit() {}

  ngAfterViewInit() {}

  @HostListener('document:scroll', ['$event'])
  handleScroll() {
    console.log(1);
    const isScrolled = window.scrollY > 50;
    console.log(window.scrollY);
    console.log(isScrolled);
  }
}
