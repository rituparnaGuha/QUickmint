import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderMyBookingComponent } from './provider-my-booking.component';

const routes: Routes = [{ path: '', component: ProviderMyBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderMyBookingRoutingModule { }
