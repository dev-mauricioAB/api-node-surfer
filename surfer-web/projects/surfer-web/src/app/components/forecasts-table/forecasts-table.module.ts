import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsModule } from 'projects/vendors/src/public-api';

import { ApiBaseServiceProvider } from '../../providers/api-base-provider.service';

import { ForecastsTableComponent } from './forecasts-table.component';

@NgModule({
  declarations: [
    ForecastsTableComponent
  ],
  imports: [
    CommonModule,
    VendorsModule
  ],
  providers: [
    ApiBaseServiceProvider
  ],
  exports: [ForecastsTableComponent]
})
export class ForecastsTableModule { }
