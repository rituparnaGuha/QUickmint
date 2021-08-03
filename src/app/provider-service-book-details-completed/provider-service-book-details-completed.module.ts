import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderServiceBookDetailsCompletedRoutingModule } from './provider-service-book-details-completed-routing.module';
import { ProviderServiceBookDetailsCompletedComponent } from './provider-service-book-details-completed.component';


@NgModule({
  declarations: [ProviderServiceBookDetailsCompletedComponent],
  imports: [
    CommonModule,
    ProviderServiceBookDetailsCompletedRoutingModule
  ]
})
export class ProviderServiceBookDetailsCompletedModule { }
