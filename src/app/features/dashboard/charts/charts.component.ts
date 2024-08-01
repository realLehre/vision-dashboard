import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { NgClass } from '@angular/common';

import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [SalesOverviewComponent, ActiveUsersComponent, NgClass],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit {
  layoutService = inject(LayoutService);
  containerWidth: WritableSignal<number> = this.layoutService.mainContentWidth;

  ngOnInit() {}
}
