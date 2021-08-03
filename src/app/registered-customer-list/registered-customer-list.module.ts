import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisteredCustomerListRoutingModule } from './registered-customer-list-routing.module';
import { RegisteredCustomerListComponent } from './registered-customer-list.component';


@NgModule({
  declarations: [RegisteredCustomerListComponent],
  imports: [
    CommonModule,
    RegisteredCustomerListRoutingModule
  ]
})
export class RegisteredCustomerListModule { }
