import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { VendorsModule } from 'projects/vendors/src/public-api';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
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
