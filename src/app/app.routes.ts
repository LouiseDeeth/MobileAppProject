import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ireland',
    loadComponent: () => import('./ireland/ireland.page').then( m => m.IrelandPage)
  },
  {
    path: 'australia',
    loadComponent: () => import('./australia/australia.page').then( m => m.AustraliaPage)
  },
  {
    path: 'ireland-news',
    loadComponent: () => import('./ireland-news/ireland-news.page').then( m => m.IrelandNewsPage)
  },
  {
    path: 'ireland-sports',
    loadComponent: () => import('./ireland-sports/ireland-sports.page').then( m => m.IrelandSportsPage)
  },
  {
    path: 'australia-news',
    loadComponent: () => import('./australia-news/australia-news.page').then( m => m.AustraliaNewsPage)
  },
  {
    path: 'australia-sports',
    loadComponent: () => import('./australia-sports/australia-sports.page').then( m => m.AustraliaSportsPage)
  },
];
