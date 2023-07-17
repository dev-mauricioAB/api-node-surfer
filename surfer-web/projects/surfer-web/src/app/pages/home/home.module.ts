import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsModule } from 'projects/vendors/src/public-api';

import { AuthService } from '../../services/auth.service';
import { UtilsService } from '../../services/utils.service';
import { AuthGuard } from '../../guards/auth.guard';

import { AppRoutingModule } from '../../app-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    VendorsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, AuthService, UtilsService],
  exports: [HomeComponent],
})
export class HomeModule { }
