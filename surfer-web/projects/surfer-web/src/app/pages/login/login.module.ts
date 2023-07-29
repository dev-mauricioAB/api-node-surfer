import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VendorsModule } from 'projects/vendors/src/public-api';

import { UtilsService } from '../../services/utils.service';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
    ])
  ],
  providers: [
    UtilsService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
