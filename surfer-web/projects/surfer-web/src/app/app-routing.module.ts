import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(({ LoginModule }) => LoginModule),
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(({ RegisterModule }) => RegisterModule),
      }
    ]
  },
  {
    path: 'app',
    loadChildren: () => import('./components/navigator/navigator.module').then(({ NavigatorModule }) => NavigatorModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
