import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationTrackingRoutingModule } from './location-tracking-routing.module';
import { LocationTrackingComponent } from './location-tracking.component';


@NgModule({
  declarations: [LocationTrackingComponent],
  imports: [
    CommonModule,
    LocationTrackingRoutingModule
  ]
})
export class LocationTrackingModule { }
