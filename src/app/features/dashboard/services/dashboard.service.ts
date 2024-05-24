import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  dashboardWidth = signal<number>(0);
}
