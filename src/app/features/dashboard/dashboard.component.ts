import { Component } from '@angular/core';
import { QuickInfoComponent } from './quick-info/quick-info.component';
import { RecordsComponent } from './records/records.component';
import { ChartsComponent } from './charts/charts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [QuickInfoComponent, RecordsComponent, ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
