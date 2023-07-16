import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'beach-list',
  },
  {
    path: 'beach-list',
    loadChildren: () => import('./pages/beach-list/beach-list.module').then(({ BeachListModule }) => BeachListModule),
  },
  {
    path: 'beach-form',
    loadChildren: () => import('./pages/beach-form/beach-form.module').then(({ BeachFormModule }) => BeachFormModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
