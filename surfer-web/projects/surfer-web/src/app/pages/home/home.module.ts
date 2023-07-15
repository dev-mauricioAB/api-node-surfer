import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { ForecastsTableModule } from '../../components/forecasts-table/forecasts-table.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    ForecastsTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
