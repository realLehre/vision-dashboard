import { Component } from '@angular/core';
import { QuickInfoComponent } from './quick-info/quick-info.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [QuickInfoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
