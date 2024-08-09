import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'modulo-a', loadChildren: () => import('./modulo-a/modulo-a.module').then(m => m.ModuloAModule) },
  { path: 'modulo-b', loadChildren: () => import('./modulo-b/modulo-b.module').then(m => m.ModuloBModule) },
  { path: '', redirectTo: '/modulo-a/child1', pathMatch: 'full' },
  { path: '**', redirectTo: '/modulo-a/child1', pathMatch: 'full' }
];
