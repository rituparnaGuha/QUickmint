import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceBookingListComponent } from './service-booking-list.component';

const routes: Routes = [{ path: '', component: ServiceBookingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceBookingListdRoutingModule { }
