import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'dashboard', component: AppComponent },
  { path: 'tables', component: AppComponent },
  { path: 'billing', component: AppComponent },
  { path: 'rtl', component: AppComponent },
  { path: 'profile', component: AppComponent },
  { path: 'sign-in', component: AppComponent },
  { path: 'sign-up', component: AppComponent },
];
