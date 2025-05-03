import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'current-weather',
    loadComponent: () => import('./current-weather/current-weather.page').then(m => m.CurrentWeatherPage),
  },
  {
    path: 'forecast',
    loadComponent: () => import('./forecast/forecast.page').then(m => m.ForecastPage),
  },
];
