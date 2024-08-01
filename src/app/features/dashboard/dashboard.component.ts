import {
  Component,
  ElementRef,
  HostListener,
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
export class DashboardComponent implements OnInit {
  @ViewChild('dashboard', { static: true })
  dashboardContainer!: ElementRef<HTMLDivElement>;
  dashboardService = inject(DashboardService);

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.dashboardService.dashboardWidth.set(
      this.dashboardContainer.nativeElement.offsetWidth,
    );
  }
}
