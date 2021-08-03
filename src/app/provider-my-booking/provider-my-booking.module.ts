import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderMyBookingRoutingModule } from './provider-my-booking-routing.module';
import { ProviderMyBookingComponent } from './provider-my-booking.component';


@NgModule({
  declarations: [ProviderMyBookingComponent],
  imports: [
    CommonModule,
    ProviderMyBookingRoutingModule
  ]
})
export class ProviderMyBookingModule { }
