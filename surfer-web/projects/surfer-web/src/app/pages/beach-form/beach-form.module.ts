import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeachFormComponent } from './beach-form.component';

@NgModule({
  declarations: [
    BeachFormComponent
  ],
  imports: [
    CommonModule,
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
