import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBookingListdRoutingModule } from './service-booking-list-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { JitsiComponent } from 'src/app/jitsi/jitsi.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceBookingListdRoutingModule,
    MatDialogModule
  ]
})
export class ServiceBookingListModule { }
