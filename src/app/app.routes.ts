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
  {
    path: 'billing',
    loadComponent: () =>
      import('./features/billing/billing.component').then(
        (c) => c.BillingComponent,
      ),
  },
  // {
  //   path: 'rtl',
  //   loadComponent: () =>
  //     import('./features/rtl/rtl.component').then((c) => c.RtlComponent),
  // },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (c) => c.ProfileComponent,
      ),
  },
  { path: 'sign-in', component: AppComponent },
  { path: 'sign-up', component: AppComponent },
];
