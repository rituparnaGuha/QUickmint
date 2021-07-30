import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceListRoutingModule } from './service-list-routing.module';
import { ServiceListComponent } from './service-list.component';


@NgModule({
  declarations: [ServiceListComponent],
  imports: [
    CommonModule,
    ServiceListRoutingModule
  ]
})
export class ServiceListModule { }
