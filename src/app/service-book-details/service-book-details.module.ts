import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceBookDetailsRoutingModule } from './service-book-details-routing.module';
import { ServiceBookDetailsComponent } from './service-book-details.component';


@NgModule({
  declarations: [ServiceBookDetailsComponent],
  imports: [
    CommonModule,
    ServiceBookDetailsRoutingModule
  ]
})
export class ServiceBookDetailsModule { }
