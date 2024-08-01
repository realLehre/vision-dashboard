import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
  },
  {
    path: 'tables',
    loadComponent: () =>
      import('./features/tables/tables.component').then(
        (c) => c.TablesComponent,
      ),
  },
  { path: 'billing', component: AppComponent },
  { path: 'rtl', component: AppComponent },
  { path: 'profile', component: AppComponent },
  { path: 'sign-in', component: AppComponent },
  { path: 'sign-up', component: AppComponent },
];
