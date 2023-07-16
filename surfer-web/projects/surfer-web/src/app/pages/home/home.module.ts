import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsModule } from 'projects/vendors/src/public-api';

import { HomeComponent } from './home.component';

import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    VendorsModule,
    AppRoutingModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
