import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigatorComponent } from './navigator.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavigatorComponent,
        children: [
          {
            path: 'beach-list',
            loadChildren: () => import('../../pages/beach-list/beach-list.module').then(({ BeachListModule }) => BeachListModule),
          },
          {
            path: 'beach-form',
            loadChildren: () => import('../../pages/beach-form/beach-form.module').then(({ BeachFormModule }) => BeachFormModule),
          }

        ]

      },
    ])
  ],
  exports: [
    NavigatorComponent
  ]
})
export class NavigatorModule { }
