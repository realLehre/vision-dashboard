import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'vision/dashboard', pathMatch: 'full' },
  { path: 'vision', redirectTo: 'vision/dashboard', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'vision/dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
      {
        path: 'vision/tables',
        loadComponent: () =>
          import('./features/tables/tables.component').then(
            (c) => c.TablesComponent,
          ),
      },
      {
        path: 'vision/billing',
        loadComponent: () =>
          import('./features/billing/billing.component').then(
            (c) => c.BillingComponent,
          ),
      },
      {
        path: 'vision/profile',
        loadComponent: () =>
          import('./features/profile/profile.component').then(
            (c) => c.ProfileComponent,
          ),
      },
    ],
  },

  {
    path: 'vision/sign-in',
    loadComponent: () =>
      import('./features/auth/sign-in/sign-in.component').then(
        (c) => c.SignInComponent,
      ),
  },
  {
    path: 'vision/sign-up',
    loadComponent: () =>
      import('./features/auth/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent,
      ),
  },
];
