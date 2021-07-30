import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProviderDashboardComponent } from './service-provider-dashboard.component';

const routes: Routes = [{ path: '', component: ServiceProviderDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderDashboardRoutingModule { }
