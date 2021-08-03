import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderListRoutingModule } from '../service-provider-list/service-provider-list-routing.module';
import { ServiceProviderListComponent } from '../service-provider-list/service-provider-list.component';
import { FilterModule } from '../component/filter/filter.module';


@NgModule({
  
  declarations: [ServiceProviderListComponent],
  imports: [
    CommonModule,
    ServiceProviderListRoutingModule,
    FilterModule
  ]
})
export class ServiceProviderListModule { }
