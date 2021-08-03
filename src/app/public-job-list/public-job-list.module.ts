import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicJobListRoutingModule } from './public-job-list-routing.module';
import { PublicJobListComponent } from './public-job-list.component';


@NgModule({
  declarations: [PublicJobListComponent],
  imports: [
    CommonModule,
    PublicJobListRoutingModule
  ],
  exports: [
    PublicJobListComponent
  ]
})
export class PublicJobListModule { }
