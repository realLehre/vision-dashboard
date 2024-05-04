import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashbaord', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
  { path: 'tables', component: AppComponent },
  { path: 'billing', component: AppComponent },
  { path: 'rtl', component: AppComponent },
  { path: 'profile', component: AppComponent },
  { path: 'sign-in', component: AppComponent },
  { path: 'sign-up', component: AppComponent },
];
