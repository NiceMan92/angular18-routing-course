import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { pageResolver } from './data.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
  ,
{
  path: 'home',
  loadComponent: () => import('./home/home.component'),
   title: 'Home'
},
{
  path: 'product',
  loadComponent: () => import('./product/product.component'),
   title: 'Product'
},
{
  path: 'setting',
  loadComponent: () => import('./setting/setting.component'),
  title: 'Settings',
  children: [
    {
      path: 'profile',
      loadComponent: () => import('./setting/profile/profile.component'),

    }
  ],
  canActivate : [authGuard]
},
{
  path: 'pages/:pageId',
  loadComponent: () => import('./pages/pages.component'),
  title: 'Pages',
  resolve: {
    page : pageResolver
  }
},
{
  path: 'notFound',
  loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
  title: 'Not found'
},
{
  path: 'old-page/:pageId',
  redirectTo: (route) => {
    return `pages/${route.params['pageId']}`
  }
},
{
  path: '**',
  redirectTo: 'notFound'
}
];
