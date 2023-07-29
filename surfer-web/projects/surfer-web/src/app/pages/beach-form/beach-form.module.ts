import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeachFormComponent } from './beach-form.component';
import { VendorsModule } from 'projects/vendors/src/public-api';

@NgModule({
  declarations: [
    BeachFormComponent
  ],
  imports: [
    CommonModule,
    VendorsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BeachFormComponent
      }
    ])
  ],
  exports: [BeachFormComponent]
})
export class BeachFormModule { }
