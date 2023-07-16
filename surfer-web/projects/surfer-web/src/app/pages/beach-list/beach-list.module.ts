import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VendorsModule } from 'projects/vendors/src/public-api';

import { ForecastsTableModule } from '../../components/forecasts-table/forecasts-table.module';

import { BeachListComponent } from './beach-list.component';

@NgModule({
  declarations: [
    BeachListComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    ForecastsTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: BeachListComponent
      }
    ]),
  ],
  exports: [
    BeachListComponent
  ]
})
export class BeachListModule { }
