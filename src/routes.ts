import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { DisableBackGuard } from './app/services/disable-back.guard';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    loadComponent: () =>
      import('./app/components/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'first',
    title: 'First Step',
    loadComponent: () =>
      import('./app/components/first/first.component').then(
        (c) => c.FirstComponent
      ),
  },
  {
    path: 'second',
    title: 'Second Step',
    canDeactivate: [DisableBackGuard],
    loadComponent: () =>
      import('./app/components/second/second.component').then(
        (c) => c.SecondComponent
      ),
  },
  {
    path: 'last',
    title: 'Last Step',
    loadComponent: () =>
      import('./app/components/last/last.component').then(
        (c) => c.LastComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
