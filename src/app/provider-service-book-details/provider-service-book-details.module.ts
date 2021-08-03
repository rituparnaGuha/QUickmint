import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderServiceBookDetailsRoutingModule } from './provider-service-book-details-routing.module';
import { ProviderServiceBookDetailsComponent } from './provider-service-book-details.component';


@NgModule({
  declarations: [ProviderServiceBookDetailsComponent],
  imports: [
    CommonModule,
    ProviderServiceBookDetailsRoutingModule
  ]
})
export class ProviderServiceBookDetailsModule { }
