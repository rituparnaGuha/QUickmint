import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProviderListComponent } from '../service-provider-list/service-provider-list.component';

const routes: Routes = [{ path: '', component: ServiceProviderListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderListRoutingModule { }
